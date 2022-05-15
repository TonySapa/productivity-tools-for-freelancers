const testfile = (componentName) =>
`import React from 'react'
import { render, screen } from '@testing-library/react'
import ${componentName} from './component'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<${componentName}>Hola</${componentName}>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
`

export default testfile
