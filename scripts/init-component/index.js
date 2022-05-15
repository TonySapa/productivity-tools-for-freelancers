import fs from 'fs'
import { component, stories, styles, testFile, types } from './contents/index.js'

/******************************************************************************
 * Directory of components. A folder named components. Should be specified
 * on script on package.json as the first parameter.
 *****************************************************************************/
const componentsDir = process.argv[2] !== undefined
  ? process.argv[2]
  : '../src/components'

/******************************************************************************
 * The name to assign to the new component.
 *****************************************************************************/
const componentName = process.argv[3] !== undefined ? process.argv[3] : 'Demo'

/******************************************************************************
 * The folder name. Is the componentName transformed from camel case.
 * Example: componentName -> component-name
 *****************************************************************************/
const componentFolder = componentName
  .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
  .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)

/******************************************************************************
 * Classification of the component according to atomic design principles.
 * https://bradfrost.com/blog/post/atomic-web-design/
 *****************************************************************************/
const atomicDesignLevel = process.argv[4] !== undefined
  ? process.argv[4]
  : 'atoms'

/******************************************************************************
 * @param {string} componentsDir the directory of the component
 * @param {string} componentName the name to assign to the component
 * @param {string} atomicDesignLevel Classification according to atomic design
 * @returns {File} folders and files containing a basic component
 *****************************************************************************/
async function createComponent () {
  const dir = `${componentsDir}/${atomicDesignLevel}/${componentFolder}`

  fs.mkdirSync(dir, { recursive: true }, (err) => {
      if (err) throw err
    }
  )

  try {
    fs.writeFileSync(`${dir}/${componentName}.styles.tsx`, styles)
    console.log(`\u001b[1;32m ✓ ${componentName}.styles.tsx successfully generated.`)
  } catch (err) {
    console.log(`\u001b[1;31m ✖ ${componentName}.styles.tsx could not be generated.`)
    console.log(err)
  }

  try {
    fs.writeFileSync(`${dir}/${componentName}.types.tsx`, types(componentName))
    console.log(`\u001b[1;32m ✓ ${componentName}.types.tsx successfully generated.`)
  } catch (err) {
    console.log(`\u001b[1;31m ✖ ${componentName}.types.tsx could not be generated.`)
    console.log(err)
  }

  try {
    fs.writeFileSync(`${dir}/${componentName}.tsx`, component(componentName))
    console.log(`\u001b[1;32m ✓ ${componentName}.tsx successfully generated.`)
  } catch (err) {
    console.log(`\u001b[1;31m ✖ ${componentName}.tsx could not be generated.`)
    console.log(err)
  }

  try {
    fs.writeFileSync(`${dir}/${componentName}.test.tsx`, testFile(componentName))
    console.log(`\u001b[1;32m ✓ ${componentName}.test.tsx successfully generated.`)
  } catch (err) {
    console.log(`\u001b[1;31m ✖ ${componentName}.test.tsx could not be generated.`)
    console.log(err)
  }

  try {
    fs.writeFileSync(`${dir}/${componentName}.stories.tsx`, stories(componentName))
    console.log(`\u001b[1;32m ✓ ${componentName}.stories.tsx successfully generated.`)
  } catch (err) {
    console.log(`\u001b[1;31m ✖ ${componentName}.stories.tsx could not be generated.`)
    console.log(err)
  }
}

createComponent()
