import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { RouteTransitionProvider } from './components/ui/RouteTransitionProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteTransitionProvider>
        <App />
      </RouteTransitionProvider>
    </BrowserRouter>
  </StrictMode>,
)
