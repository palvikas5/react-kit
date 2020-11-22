import styled from 'styled-components'

export default styled.button`
  border: 1px solid hotpink;
  border-radius: 3px;
  outline: 0;
  background-color: hotpink;
  color: white;
  padding: 7px 17px;
  font-size: inherit;
  text-align: center;
  text-transform: uppercase;

  &:focus {
    outline: 1px dashed black;
  }
`
