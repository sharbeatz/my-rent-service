import { BrowserRouter, Route, Routes } from "react-router-dom";

import {MainPage} from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/main-page/favorites-page";
import LoginPage from "../../pages/main-page/login-page";
import OfferPage from "../../pages/main-page/offer-page";
import NotFoundPage from "../../pages/main-page/not-found-page";
import { AppRoute } from "../../const";
import { AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer } from "../../types/offer";
import { OfferList } from "../../types/offer";
import { offersList } from "../../mocks/offer-list";



type AppMainPageProps = {
    rentalOffersCount: number;
    offerList: OfferList[];
    offers: FullOffer[];
}



function App({rentalOffersCount, offers}: AppMainPageProps) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = {AppRoute.Main}
            element = {<MainPage rentalOffersCount={rentalOffersCount} offerList = {offersList}/>} 
            />

            <Route path={AppRoute.Login}
            element = {<LoginPage/>}
            />

            <Route path = { AppRoute.Favorites }
            element = { <PrivateRoute
            authorizationStatus = {AuthorizationStatus.NoAuth}>
                <FavoritesPage />
            </PrivateRoute>
            }
            />

            <Route 
            path={AppRoute.Offer}
            element = {<OfferPage offers={offers}/>}
            />

            <Route path= {AppRoute.NotFound}
            element={<NotFoundPage />}/>

        </Routes>
        </BrowserRouter>
    );
}

export default App