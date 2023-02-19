import { ReactNode } from 'react'
import styled from 'styled-components'

type MainSectionContainerProps = {
  children?: ReactNode | ReactNode[]
}

export function MainSectionContainer({ children }: MainSectionContainerProps) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: black;
`
