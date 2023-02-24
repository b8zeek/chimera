import styled from 'styled-components'

import { MainSectionContainer, Paragraph, SubHeading } from '@basic/components'
import { ReactComponent as CloverSVG } from '../assets/clover.svg'

type MainSectionProps = {
  heading: string
  svg: string
  content: string
}

export function MainSection({ heading, svg, content }: MainSectionProps) {
  return (
    <MainSectionContainer marginBottom='50px'>
      <HeadingContainer>
        <SubHeading>{heading}</SubHeading>
        <CloverSVG />
      </HeadingContainer>
      <HL />
      <Paragraph color='#fff' textAlign='justify'>
        {content}
      </Paragraph>
    </MainSectionContainer>
  )
}

const HeadingContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HL = styled.hr`
  margin-bottom: 20px;
`
