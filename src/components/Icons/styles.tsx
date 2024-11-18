import styled from "styled-components"

export const IconStyled = styled.img<{ objectFit: string }>`
  width: 100%;
  height: 100%;
  objectFit: ${({objectFit}) => objectFit}
`

export const Figure = styled.figure<{ width: number, height: number }>`
  width: ${({width}) => width};
  height: ${({height}) => height};
`