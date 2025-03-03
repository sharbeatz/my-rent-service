import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/main-page/favorites-page";
import LoginPage from "../../pages/main-page/login-page";
import OfferPage from "../../pages/main-page/offer-page";
import NotFoundPage from "../../pages/main-page/not-found-page";
import { AppRoute } from "../../const";
import { AuthorizationStatus } from "../../const";


type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount}: AppMainPageProps) {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = {AppRoute.Main}
            element = {<MainPage rentalOffersCount={rentalOffersCount}/>} 
            />

            <Route path={AppRoute.Login}
            element = {<LoginPage/>}
            />

            <Route path = {AppRoute.Favorites}
            element = {<FavoritesPage />} 
            />

            <Route 
            path={AppRoute.Offer}
            element = {<OfferPage />}
            />

            <Route path= {AppRoute.NotFound}
            element={<NotFoundPage />}/>


        </Routes>
        </BrowserRouter>
    );
}

export default App