import styled from 'styled-components'

import { SocialConnect } from './SocialConnect'

export function Footer() {
  return (
    <Container>
      <FooterHeading>Looking forward to working with the passionate professionals! Reach out.</FooterHeading>
      <SocialConnect fill='#fff' marginBottom='20px' />
      <CopyrightText>Copyright © 2023 Basic.</CopyrightText>
      <CopyrightText>All Rights Reserved.</CopyrightText>
    </Container>
  )
}

const Container = styled.div`
  padding: 30px 0;
  background-color: #000;
`

const FooterHeading = styled.h2`
  width: 300px;
  line-height: 18px;
  font-size: 16px;
  font-family: Fjalla One;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin: 0 auto 40px;
`

const CopyrightText = styled.p`
  line-height: 15px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
`
