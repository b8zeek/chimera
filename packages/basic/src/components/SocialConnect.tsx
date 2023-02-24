import styled from 'styled-components'

import { ReactComponent as LinkedInLogoSVG } from '../assets/linkedin-logo.svg'
import { ReactComponent as TwitterLogoSVG } from '../assets/twitter-logo.svg'
import { ReactComponent as GitHubLogoSVG } from '../assets/github-logo.svg'
import { ReactComponent as TelegramLogoSVG } from '../assets/telegram-logo.svg'
import { ReactComponent as WhatsAppLogoSVG } from '../assets/whatsapp-logo.svg'

type SocialConnectProps = {
  fill?: string
  marginBottom?: string
}

export function SocialConnect({ fill, marginBottom }: SocialConnectProps) {
  return (
    <Container marginBottom={marginBottom}>
      <LinkedInLogo fill={fill} />
      <TwitterLogo fill={fill} />
      <GitHubLogo fill={fill} />
      <TelegramLogo fill={fill} />
      <WhatsAppLogo fill={fill} />
    </Container>
  )
}

const Container = styled.div<SocialConnectProps>`
  width: 180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto ${({ marginBottom }) => marginBottom || ''};
`

type FillProp = {
  fill?: string
}

const LinkedInLogo = styled(LinkedInLogoSVG)<FillProp>`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  ${({ fill }) => fill && `& rect { fill: ${fill}; }`}
`

const TwitterLogo = styled(TwitterLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  ${({ fill }) => fill && `& path { fill: ${fill}; }`}
`

const GitHubLogo = styled(GitHubLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  ${({ fill }) => fill && `& path { fill: ${fill}; }`}
`

const TelegramLogo = styled(TelegramLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  ${({ fill }) => fill && `& path { fill: ${fill}; }`}
`

const WhatsAppLogo = styled(WhatsAppLogoSVG)`
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  ${({ fill }) => fill && `& path { fill: ${fill}; }`}
`
