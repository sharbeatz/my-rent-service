import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/app'
import { Setting } from './const'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'
import { reviewsData } from './mocks/reviews-data'
import { store } from './store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App
      rentalOffersCount={Setting.rentOffersCount}
      offers = {offers}
      offersList={offersList}
      reviewsData = {reviewsData}
      />
    </Provider>
  </StrictMode>
)
