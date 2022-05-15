import React from 'react'
import { render, screen } from '@testing-library/react'
import Random from './component'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<Random>Hola</Random>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
