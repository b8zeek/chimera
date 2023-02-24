import styled from 'styled-components'

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
        {data.slice(0, 6).map((poap: POAP) => (
          <POAPToken key={poap.tokenId} src={poap.event.image_url} />
        ))}
      </POAPsContainer>
    </Container>
  )
}

const Container = styled.section``

const POAPsContainer = styled.div`
  min-height: 20px;
  padding: 10px;
  border-radius: 1000px;
  background-color: black;
`

const POAPToken = styled.img`
  width: 20%;
  margin-right: -4%;
`
