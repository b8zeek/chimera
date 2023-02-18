import { createGlobalStyle } from 'styled-components'

import { FontAllianceNo2 } from '../assets/fonts'

export const GlobalStyle = createGlobalStyle`
  ${FontAllianceNo2}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
  }
`
