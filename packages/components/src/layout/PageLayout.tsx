import { ReactNode } from 'react'
import styled from 'styled-components'

import { MAX_PAGE_WIDTH } from '@basic/config'

type PageLayoutProps = {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <Background />
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: ${MAX_PAGE_WIDTH};
  min-height: 100vh;
  margin: 0 auto;
`

const Background = styled.div`
  width: calc(${MAX_PAGE_WIDTH} + 80px);
  height: 100%;
  position: absolute;
  left: -40px;
  top: 0;
  z-index: -1;
  background-color: #fafafa;
`
