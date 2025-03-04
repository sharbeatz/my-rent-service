import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/app'
import { Setting } from './const'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
    rentalOffersCount={Setting.rentOffersCount}/>
  </StrictMode>
)
