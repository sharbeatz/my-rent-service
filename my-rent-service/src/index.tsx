import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/app'
import { Setting } from './const'
import {offers} from './mocks/offers'
import { offersList } from './mocks/offer-list'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
    rentalOffersCount={Setting.rentOffersCount}
    offerList = {offersList}
    offers = {offers}
    />
  </StrictMode>
)
