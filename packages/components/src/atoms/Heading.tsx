import styled from 'styled-components'

type HeadingProps = {
  textAlign?: 'center'
}

export const Heading = styled.h1<HeadingProps>`
  line-height: 55px;
  font-size: 40px;
  font-family: AllianceNo2;
  font-weight: 900;
  letter-spacing: -0.03em;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  color: #000000;
`
