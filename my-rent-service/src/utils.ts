import { CityOffer } from "./types/offer";
import { OfferList } from "./types/offer";
import { FullOffer } from "./types/offer";
import { SortOffersType } from "./const";
import { SortOffer } from "./types/sort";

function getCity (city: string, CITIES_LOCATION: CityOffer[]) {
    return (CITIES_LOCATION.find((item)=> item.name === city))
}

function getOffersByCity (city: string, offersList: OfferList[]) {
    console.log("utils.ts is loaded");
    return (offersList.filter((item)=> item.city.name === city))
}

function sortOffersByType(offers: OfferList[], type: SortOffer): OfferList[] {
    switch (type) {
      case SortOffersType.PriceToHigh:
        return offers.sort((a, b) => a.price - b.price);
      case SortOffersType.PriceToLow:
        return offers.sort((a, b) => b.price - a.price);
      case SortOffersType.TopRated:
        return offers.sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }

export {getCity, getOffersByCity, sortOffersByType}