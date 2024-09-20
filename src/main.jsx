import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FeresContextProvider from './context/FeresContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeresContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FeresContextProvider>
  </StrictMode>,
)
