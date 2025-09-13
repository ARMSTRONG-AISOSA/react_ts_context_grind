import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToggleBoxProvider } from './context/ToggleBoxContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToggleBoxProvider>
        <App />
      </ToggleBoxProvider>
    </BrowserRouter>
  </StrictMode>,
)
