import { CityOffer } from "./types/offer";
import { OfferList } from "./types/offer";
import { FullOffer } from "./types/offer";

function getCity (city: string, CITIES_LOCATION: CityOffer[]) {
    return (CITIES_LOCATION.find((item)=> item.name === city))
}

function getOffersByCity (city: string, offersList: OfferList[]) {
    console.log("utils.ts is loaded");
    return (offersList.filter((item)=> item.city.name === city))
}

export {getCity, getOffersByCity}