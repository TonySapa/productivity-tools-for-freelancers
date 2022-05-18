# Motivation

Communicating with different APIs from the Front End is often a repetitive task that can be summarised in a documented and coded process. In order to save time and use a consistent code style among different services is vital to have this process pre-defined.

## Assumptions

There is usually 4 main things that the Front End finds useful on an API response in order to handle the response, those are:

- "data" The front end access the data returned and parse it with a specific function that is also prepared to handle errors.
- "status" Ideally there is only one status code that can be considered succesful. Not by itself, but this along with the data parsed can be enough to determine if the response can be considered successful.
- "headers.content-length" sometimes is useful to know how many items are in the response.
- "headers.content-type" know if the content type of the response is as expected. (application/json, etc.)

# Default response validator

Conditions:

- Status is 200 (201 when adding resources or 204 when deleting)
- The format (use typescript and/or parser) is exactly as expected.

# Functions to use (Functional Programming)

- `isSuccessful(res)` A case specific function (ideally not to reuse, since services can evolve and demand different behavior) to determine if the response is successful comparing the response with the expected status code and expected format. (Using previously type coded `param as ExpectedParam`) Other than that, it would be handled as failed.
- `handleSuccess(res)`
- `handleFail(res)`

Using this reusable function would have this format

```
const functionUsingThatService = async () => {
  const res = await getService(params)
  isSuccessful(res)
    ? handleSuccess(res.data)
    : handleFail(res)
}
```

The isSuccessful function could look something like:

```
const isSuccessful = (res) => {
  const statusExpected = 200
  type TypeExpected = {
    fieldA: string,
    fieldB?: number
  }
  const matchesExpected = (param) => {
    return typeof param === TypeExpected
  }
  return res.status === statusExpected &&
    matchesExpected(res.data)
}
```

The handleSuccess handler could look like this:

```
const handleSuccess = (res) => {
  const title = res.data && res.data.whatever || 'Fallbacktitle'
  const description = res.data && res.data.whatever2 || 'Fallback description'
  toaster.success(title, { description: description })
}
```

The handleFail handler could look like this:

```
export const handleFail = (res: AxiosResponse<GetCountryResponse>) => {
  if (res.status && res.status === 404) {
    toaster.danger('My custom not found message')
    console.error({ myCustomField: 'My tip', ...res })
  } else {
    toaster.danger('General error message')
  }
}
```
