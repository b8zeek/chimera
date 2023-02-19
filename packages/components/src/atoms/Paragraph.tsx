import styled from 'styled-components'

type ParagraphProps = {
  width?: string
  textAlign?: 'center'
  marginBottom?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  ${({ width }) => width && `width: ${width};`}
  line-height: 19px;
  font-size: 16px;
  font-family: Raleway;
  font-weight: 400;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  color: #000000;
  margin: 0 auto;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
