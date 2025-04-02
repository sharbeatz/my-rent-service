import { CityOffer } from "./types/offer";

function getCity (city: string, CITIES_LOCATION: CityOffer[]) {
    return (CITIES_LOCATION.find((item)=> item.name === city))
}

export {getCity}