import styled from 'styled-components'

type HeadingProps = {
  color?: string
  textAlign?: 'center'
}

export const Heading = styled.h1<HeadingProps>`
  line-height: 36px;
  font-size: 40px;
  font-family: AllianceNo2;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ color }) => color || '#000000'};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  margin-bottom: 20px;
`
