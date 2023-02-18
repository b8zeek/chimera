import { ReactNode } from 'react'
import styled from 'styled-components'

import { MAX_PAGE_WIDTH } from '@basic/config'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 100%;
  max-width: ${MAX_PAGE_WIDTH};
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;

  border: 1px solid #d36500;
`
