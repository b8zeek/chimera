import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

const techStack = ['TypeScript', 'JavaScript', 'React', 'Angular', 'Node.js', 'GatsbyJS', 'Next.js', 'Framer Motion']

export function TechStackMarquee() {
  return (
    <Container>
      <Line />
      <Label>Tech Stack</Label>
      <Marquee speed={30} gradientColor={[250, 250, 250]} gradientWidth={100}>
        {techStack.map(tech => (
          <>
            <Tech key={`dot-${tech}`}>•</Tech>
            <Tech key={tech}>{tech}</Tech>
          </>
        ))}
      </Marquee>
      <Line lowerItem />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  margin-bottom: 30px;
`

const Line = styled.div<{ lowerItem?: boolean }>`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000 15%, #000 85%, rgba(0, 0, 0, 0) 100%);
  ${({ lowerItem }) => `margin-${lowerItem ? 'top' : 'bottom'}: 15px;`}
`

const Label = styled.p`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: -18px;
  transform: translateX(-50%);
  line-height: 30px;
  font-size: 24px;
  font-family: Fjalla One;
  font-weight: 800;
  background-color: #fafafa;
`

const Tech = styled.p`
  display: inline-block;
  vertical-align: top;
  line-height: 24px;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
`
