import { PageLayout } from '@basic/components'
import styled from 'styled-components'

import { Hero, Label } from '../components'
import { Heading, Paragraph } from '@basic/components'

export function App() {
  return (
    <PageLayout>
      <Container>
        <Label />
        <Hero />
        <Heading textAlign='center'>Welcome Traveler</Heading>
        <Paragraph width='300px' textAlign='center'>
          My name is Mirko Basic. I am an experience technologist driving the adoption of blockchain.
        </Paragraph>
      </Container>
    </PageLayout>
  )
}

const Container = styled.div`
  position: relative;
  padding: 60px 0;
`

export default App
