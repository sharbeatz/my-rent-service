import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/app'
import { Setting } from './const'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'
import { reviewsData } from './mocks/reviews-data'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
    rentalOffersCount={Setting.rentOffersCount}
    offers = {offers}
    offersList={offersList}
    reviewsData = {reviewsData}
    />
  </StrictMode>
)
