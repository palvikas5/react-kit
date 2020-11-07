import React from 'react'

export interface ExampleComponentProps {
  text: any
}

const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return <h1>This is sample Example{text}</h1>
}
export default ExampleComponent
