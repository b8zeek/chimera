import { PageLayout } from '@basic/components'
import styled from 'styled-components'

import { Hero, Label } from '../components'

export function App() {
  return (
    <PageLayout>
      <Container>
        <Label />
        <Hero />
      </Container>
    </PageLayout>
  )
}

const Container = styled.div`
  position: relative;
  padding: 60px 0;
`

export default App
