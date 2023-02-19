import styled from 'styled-components'

import { ReactComponent as LinkedInLogoSVG } from '../assets/linkedin-logo.svg'
import { ReactComponent as TwitterLogoSVG } from '../assets/twitter-logo.svg'
import { ReactComponent as GitHubLogoSVG } from '../assets/github-logo.svg'
import { ReactComponent as TelegramLogoSVG } from '../assets/telegram-logo.svg'
import { ReactComponent as WhatsAppLogoSVG } from '../assets/whatsapp-logo.svg'

export function SocialConnect() {
  return (
    <Container>
      <LinkedInLogo />
      <TwitterLogo />
      <GitHubLogo />
      <TelegramLogo />
      <WhatsAppLogo />
    </Container>
  )
}

const Container = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const LinkedInLogo = styled(LinkedInLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`

const TwitterLogo = styled(TwitterLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`

const GitHubLogo = styled(GitHubLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`

const TelegramLogo = styled(TelegramLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`

const WhatsAppLogo = styled(WhatsAppLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`
