import styled from 'styled-components'

import { usePOAPs } from '../hooks/usePOAPs'

export function POAPsSection() {
  const { data, isFetching } = usePOAPs()

  console.log('DATA', data)

  if (isFetching) return <p>Loading POAPs Section...</p>

  return <Container>POAPs Section</Container>
}

const Container = styled.section`
  min-height: 20px;
  background-color: black;
`
