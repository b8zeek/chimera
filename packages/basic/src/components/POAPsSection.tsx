import styled, { keyframes } from 'styled-components'

import { usePOAPs } from '../hooks/usePOAPs'
import { SubHeading } from '@basic/components'

type POAP = {
  chain: string
  created: string
  event: {
    city: string
    country: string
    description: string
    end_date: string
    event_url: string
    expiry_date: string
    fancy_id: string
    id: number
    image_url: string
    name: string
    start_date: string
    supply: number
    year: number
  }
  owner: string
  tokenId: string
}

export function POAPsSection() {
  const { data, isFetching } = usePOAPs()

  // TODO: HANDLE POAPs LOADING...
  if (isFetching) return null

  return (
    <Container>
      <SubHeading color='#000' textAlign='center'>
        Follow My Journey
      </SubHeading>
      <POAPsContainer>
        {data.slice(0, 6).map((poap: POAP, index: number) => (
          <POAPToken key={poap.tokenId} src={poap.event.image_url} animationDelay={index * 0.1} />
        ))}
      </POAPsContainer>
    </Container>
  )
}

const Container = styled.section`
  margin-bottom: 40px;
`

const POAPsContainer = styled.div`
  min-height: 20px;
  padding: 10px;
  border-radius: 1000px;
  background-color: black;
`

const PopAnimation = keyframes`
  0% {
    scale: 1;
  }

  5% {
    scale: 1.1;
  }

  10% {
    scale: 1;
  }
`

const POAPToken = styled.img<{ animationDelay: number }>`
  width: 20%;
  animation: 3s ${PopAnimation} ease-in-out infinite;
  animation-delay: ${({ animationDelay }) => animationDelay}s;
  margin-right: -4%;
`
