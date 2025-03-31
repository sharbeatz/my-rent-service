import { NearbyOffers } from "../nearby-offers/nearby-offers"
import { OfferList } from "../../types/offer"

type NearbyOffersListProps = {
    offersList: OfferList[];
}

function NearbyOffersList({offersList}: NearbyOffersListProps) {
    return (
        <div className="near-places__list places__list">
            {offersList.map((item) => <NearbyOffers offer={item}/>)}
        </div>

    )
}

export {NearbyOffersList}