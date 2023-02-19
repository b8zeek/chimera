import { PageLayout } from '@basic/components'
import styled from 'styled-components'

import { Hero, Label, MainSection, SocialConnect } from '../components'
import { Heading, Paragraph } from '@basic/components'

export function App() {
  return (
    <PageLayout>
      <Container>
        <Label />
        <Hero />
        <Heading textAlign='center'>Welcome Traveler</Heading>
        <Paragraph width='300px' fontSize='16px' textAlign='center' marginBottom='20px'>
          My name is Mirko Basic. I am an experience technologist driving the adoption of blockchain.
        </Paragraph>
        <SocialConnect />
        <MainSection />
      </Container>
    </PageLayout>
  )
}

const Container = styled.div`
  position: relative;
  padding: 60px 20px;
`

export default App
