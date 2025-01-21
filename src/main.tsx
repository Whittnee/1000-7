import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './components/app/app'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
