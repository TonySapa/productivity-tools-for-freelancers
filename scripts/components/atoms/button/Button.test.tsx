import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './component'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Button>Hola</Button>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
