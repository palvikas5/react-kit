import React from 'react'
import TextInputWrapper from './TextInput.style'

export interface TextInputProps {
  value: string
  onTextChange?: (text: string) => void
  ariaLabel: string
}

const TextInput = ({ value, onTextChange, ariaLabel }: TextInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onTextChange) {
      onTextChange(e.target.value)
    }
  }

  return (
    <TextInputWrapper
      type='text'
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
    />
  )
}

export default TextInput
