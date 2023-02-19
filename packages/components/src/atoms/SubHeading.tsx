import styled from 'styled-components'

type SubHeadingProps = {
  marginBottom?: string
}

export const SubHeading = styled.h2<SubHeadingProps>`
  line-height: 30px;
  font-size: 24px;
  font-family: Raleway;
  font-weight: 800;
  color: #ffffff;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
