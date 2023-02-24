import styled, { keyframes } from 'styled-components'

import brain from '../assets/brain.jpeg'
import { BoxShadowStyle } from '@basic/config'

export function Hero() {
  return (
    <Container>
      <Image src={brain} />
      <MB>MB</MB>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 30px;
`

const WavingAnimation = keyframes`
  0% {
    width: 60px;
    height: 60px;
    line-height: 60px;
    top: 0;
    right: 0;
    transform: rotate(10deg);
  }
  
  10% {
    width: 64px;
    height: 64px;
    line-height: 64px;
    top: -2px;
    right: -2px;
    font-size: 40px;
    transform: rotate(15deg);
  }

  20% {
    width: 60px;
    height: 60px;
    line-height: 60px;
    top: 0;
    right: 0;
    transform: rotate(10deg);
  }
  
  30% {
    width: 64px;
    height: 64px;
    line-height: 64px;
    top: -2px;
    right: -2px;
    font-size: 40px;
    transform: rotate(15deg);
  }

  40% {
    width: 60px;
    height: 60px;
    line-height: 60px;
    top: 0;
    right: 0;
    transform: rotate(10deg);
  }
  
  100% {
    width: 60px;
    height: 60px;
    line-height: 60px;
    top: 0;
    right: 0;
    transform: rotate(10deg);
  }
`

const MB = styled.p`
  width: 60px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  font-size: 32px;
  font-family: Fjalla One;
  text-align: center;
  color: white;
  background: #4a4a4a;
  ${BoxShadowStyle}

  animation: 1s ${WavingAnimation} ease-in-out infinite;
`
