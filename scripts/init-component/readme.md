# About
A script to generate a folder named as your component, containing a minimalist react-typescript (.tsx) template component with its jest test file, types file, stories file (storybook.js), and styles file (react-jss).
```
└── my-component
    │
    └── MyComponent.tsx
    └── MyComponent.types.tsx
    └── MyComponent.styles.tsx
    └── MyComponent.test.tsx
    └── MyComponent.stories.tsx
    └── index.ts
```

# Installation
```
npm i -D @tonisanchez.dev/init-component
```
Alternatively
```
yarn add -D @tonisanchez.dev/init-component
```

# How it works
Execute the script on your package.json like this:
```
// package.json
...
  "component": "node '@tonisanchez.dev/init-component' 'YOUR_COMPONENTS_FOLDER'"
...
```
Everytime you call this script a new folder will be created containing 6 files:
- Types file with a minimal type declaration for props.
- Declaration of styles with a basic react-jss configuration.
- Stories file for storybook.js code-level documentation.
- Test file with a pre-built test that is passing.
- Component file that renders a minimalistic component importing above files.
- An index to use it optionally for repositories with an folder structure of "index" files.

Notice that the folder created containing the above files will be named after the component name you specify as first parameter. See next section.

# Parameters
## `Component name`
Using script as shown above, you can specify the name of your component with a following parameter as shown below:
```
npm run component MyComponent
```
Alternatively
```
yarn component MyComponent
```


## `subfolder`
You can specify a subfolder with the second parameter. This is specially useful for projects that follows [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) principles. With the second optional parameter you can sepcify the level of the component represented in the scale [atoms, molecules, organisms, templates, pages].

# Examples
Assuming the following in your package.json
```
...
  "component": "node '@tonisanchez.dev/init-component' './src/components'"
...
```
And then running the script below
```
yarn run component MyComponent organisms
```
Will generate the next content
```
src
│
└───components
│   │
│   └── ...
│   │
│   └── organisms
│       │
│       └── my-component
│           │
│           └── MyComponent.tsx
│           └── MyComponent.types.tsx
│           └── MyComponent.styles.tsx
│           └── MyComponent.test.tsx
│           └── MyComponent.stories.tsx
│           └── index.ts
└─...
```

# Default content of files generated

## [COMPONENT.tsx]
```
import React from 'react'

import { useStyles } from './styles'
import { MyComponentProps } from './types'

const MyComponent = ({ children }: MyComponentProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default MyComponent
```

## [COMPONENT.types.tsx]
```
export type MyComponentProps = {
  children: string
}
```

## [COMPONENT.styles.tsx]
```
import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})
```

## [COMPONENT.test.tsx]
```
import React from 'react'
import { render, screen } from '@testing-library/react'
import MyComponent from './component'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<MyComponent>Hola</MyComponent>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
```

## [COMPONENT.stories.tsx]
```
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyComponent from '.';

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args: any) => <MyComponent {...args} />;

export const Primary = Template.bind({});
/* Primary.parameters = {
  backgrounds: { default: 'dark' }
};

Primary.args = {
  label: 'MyComponent',
  variant: MyComponentVariants.primary
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'MyComponent',
  variant: MyComponentVariants.secondary
}; */
```

# Have fun with it
I will be publishing newer versions and extend this simple and small tool. Meanwhile, I have more interesting projects on my Github [@TonySapa](https://github.com/TonySapa) or site [tonisanchez.dev](https://tonisanchez.dev)