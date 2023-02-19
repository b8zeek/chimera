import styled from 'styled-components'

type ParagraphProps = {
  width?: string
  fontSize?: string
  textAlign?: 'center' | 'justify'
  color?: string
  marginBottom?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  ${({ width }) => width && `width: ${width};`}
  line-height: 1.2;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  font-family: Raleway;
  font-weight: 400;
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  color: ${({ color }) => color || '#000000'};
  margin: 0 auto;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
