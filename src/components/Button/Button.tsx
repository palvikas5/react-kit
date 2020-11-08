import React from 'react'
import ButtonWrapper from './button.style'

export interface ButtonProps {
  children: string | number
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper type='button' onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
