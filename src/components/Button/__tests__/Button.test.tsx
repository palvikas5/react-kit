import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import Button from '../Button'

describe('button', () => {
  it('should render successfully', () => {
    expect.assertions(1)
    const { getByText } = render(<Button>Sample button</Button>)
    expect(getByText('Sample button')).toBeInTheDocument()
  })

  it('should trigger onClick fn', () => {
    expect.assertions(1)
    const mockOnClick = jest.fn()
    const { getByText } = render(
      <Button onClick={mockOnClick}>Sample button</Button>,
    )
    const btn = getByText('Sample button')
    fireEvent.click(btn)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
