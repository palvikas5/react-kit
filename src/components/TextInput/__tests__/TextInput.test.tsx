import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import TextInput from '../TextInput'

describe('textInput', () => {
  it('should render successfully', () => {
    expect.assertions(1)
    const { getByLabelText } = render(
      <TextInput value='random text' ariaLabel='random text box' />,
    )
    expect(getByLabelText('random text box')).toBeInTheDocument()
  })

  it('should trigger onChange fn', () => {
    expect.assertions(2)
    const mockOnChange = jest.fn()
    const { getByLabelText } = render(
      <TextInput
        value='random text'
        onTextChange={mockOnChange}
        ariaLabel='random text box'
      />,
    )
    const btn = getByLabelText('random text box')
    fireEvent.change(btn, { target: { value: 'sdfkjl' } })
    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith('sdfkjl')
  })
})
