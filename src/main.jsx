import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providershoe from './contextapi/Providershoe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providershoe>
    <App />
  </Providershoe>
  </StrictMode>
)
