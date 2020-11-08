import React from 'react'

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
    <input
      type='text'
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
    />
  )
}

export default TextInput
