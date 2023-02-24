import styled from 'styled-components'

import mirkoJPG from '../assets/mirko.jpg'

export function ImageSection() {
  return <Image src={mirkoJPG} />
}

const Image = styled.img`
  width: 100%;
`
