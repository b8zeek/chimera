import styled from 'styled-components'

type SubHeadingProps = {
  color?: string
  textAlign?: 'center'
  marginBottom?: string
}

export const SubHeading = styled.h2<SubHeadingProps>`
  line-height: 30px;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 800;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  color: ${({ color }) => color || '#ffffff'};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
