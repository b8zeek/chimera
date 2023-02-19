import styled from 'styled-components'

import { MainSectionContainer, Paragraph, SubHeading } from '@basic/components'

export function MainSection() {
  return (
    <MainSectionContainer marginBottom='20px'>
      <SubHeading>About Me</SubHeading>
      <HL />
      <Paragraph color='#fff' textAlign='justify'>
        I LOVE what I do! I am a full-stack software engineer who takes pride in writing extremely clean, readable and
        minimal code and focuses on crafting future-proof web applications which are performant and easy to maintain. I
        value well-organized project structure, thoughtful interactions and innovative ideas. Really passionate about
        technology, I'm interested in the entire spectrum but my go-to technology is React. I devoted a lot of time
        getting to know it in-depth together with its whole ecosystem and I enjoy using it the most since it is
        unopinionated and everyone has a chance to adapt it to their own needs and express themselves in their own way.
        My abundant energy fuels me in the pursuit of many interests, I enjoy using my obsessive attention to detail, my
        unequivocal love for improvement and my mission-driven work ethic to continuously get better.
      </Paragraph>
    </MainSectionContainer>
  )
}

const HL = styled.hr`
  margin-bottom: 10px;
`
