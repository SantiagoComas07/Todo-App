import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ThemeProvider} from  '@emotion/react'
import theme from './config/theme.config'
import './styles/global.styles.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
