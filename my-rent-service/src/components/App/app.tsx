import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/main-page/favorites-page";
import LoginPage from "../../pages/main-page/login-page";
import OfferPage from "../../pages/main-page/offer-page";
import NotFoundPage from "../../pages/main-page/not-found-page";

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount}: AppMainPageProps): JSX.Element {
    return (
        // <MainPage rentalOffersCount={rentalOffersCount}/>
        // <FavoritesPage/>
        // <LoginPage />
        // <OfferPage/>
        <NotFoundPage/>
    );
}

export default App