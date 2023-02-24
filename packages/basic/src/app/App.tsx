import { PageLayout } from '@basic/components'
import styled from 'styled-components'

import { Footer, Hero, Label, MainSection, POAPsSection, SocialConnect, TechStackMarquee } from '../components'
import { Heading, Paragraph } from '@basic/components'

const mainSectionData = [
  {
    heading: 'About Me',
    svg: 'clover',
    content:
      "I LOVE what I do! I am a full-stack software engineer who takes pride in writing extremely clean, readable and minimal code and focuses on crafting future-proof web applications which are performant and easy to maintain. I value well-organized project structure, thoughtful interactions and innovative ideas. Really passionate about technology, I'm interested in the entire spectrum but my go-to technology is React. I devoted a lot of time getting to know it in-depth together with its whole ecosystem and I enjoy using it the most since it is unopinionated and everyone has a chance to adapt it to their own needs and express themselves in their own way. My abundant energy fuels me in the pursuit of many interests, I enjoy using my obsessive attention to detail, my unequivocal love for improvement and my mission-driven work ethic to continuously get better."
  },
  {
    heading: 'What can you expect?',
    svg: 'clover',
    content:
      "I think of myself as an extremely dedicated person to the goal and that is one of my biggest strengths. What I'm interested in, what I'm occupied with, I approach extremely thoroughly in the desire to know every aspect of it so I can eliminate every unfamiliarity. What does that mean to you? If I like my environment and if I'm surrounded with the people who share the similar mindset, who don't find satisfaction in an average delivery, I believe there is no limit to what we can achieve. We'll constantly search for the perfection together, we'll constantly want more, we'll be ever-growing!"
  },
  {
    heading: 'What do I expect?',
    svg: 'clover',
    content:
      "I expect you to be open for constructive criticism, both negative and positive, I expect you to be willing to share primarily negative criticism so I know what should I work on. I strive for the greatness, innovation and immortality and I expect you to support me. I can be a follower but I can be a leader, as well. As opinionated person, I love opinionated people, especially the ones who are willing to engage in the discussion because that's how we evolve, by seeing different points of view, by perceiving different perspectives, by getting to know another way of thinking."
  }
]

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
        <SocialConnect marginBottom='60px' />
        <MainSection {...mainSectionData[0]} />
        <TechStackMarquee />
        <MainSection {...mainSectionData[1]} />
        <MainSection {...mainSectionData[2]} />
        <POAPsSection />
      </Container>
      <Footer />
    </PageLayout>
  )
}

const Container = styled.div`
  position: relative;
  padding: 60px 20px;
`

export default App
