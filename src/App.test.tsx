import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders the toggle button', () => {
  const { getByTestId } = render(<App />)
  const button = getByTestId('toggle-button')
  expect(button).toBeInTheDocument()
})

/**TODO: Write test to check if the toggle function was called */
