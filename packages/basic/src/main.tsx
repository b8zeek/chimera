import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app/App'
import { GlobalStyle } from '@basic/config'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)
