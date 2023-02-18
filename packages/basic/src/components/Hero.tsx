import styled from 'styled-components'

import brain from '../assets/brain.jpeg'

export function Hero() {
  return <Image src={brain} />
}

const Image = styled.img`
  width: 100%;
`
