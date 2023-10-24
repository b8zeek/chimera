import { createGlobalStyle, css } from 'styled-components'

import { FontAllianceNo2 } from '../assets/fonts'
import { BOX_SHADOW } from '../constants'

export const GlobalStyle = createGlobalStyle`
  ${FontAllianceNo2}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Raleway;
    font-size: 16px;
  }

  body {
    min-height: 100vh;
    background-color: #000;
  }
`

export const BoxShadowStyle = css`
  box-shadow: ${BOX_SHADOW};
`
