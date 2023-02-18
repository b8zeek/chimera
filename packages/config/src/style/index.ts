import { createGlobalStyle } from 'styled-components'

import { FontAllianceNo2 } from '../assets/fonts'

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
    background-color: #fafafa;
  }
`
