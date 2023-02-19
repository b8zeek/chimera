import { ReactNode } from 'react'
import styled from 'styled-components'

type MainSectionContainerProps = {
  children?: ReactNode | ReactNode[]
  marginBottom?: string
}

export function MainSectionContainer({ children, marginBottom }: MainSectionContainerProps) {
  return <Container marginBottom={marginBottom}>{children}</Container>
}

const Container = styled.div<{ marginBottom?: string }>`
  padding: 20px;
  border-radius: 5px;
  background: black;
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
`
