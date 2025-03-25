import FavoritesCard from "../favorites-card/favorites-card";
import { OfferList } from "../../types/offer";


type FavoritesCardListProps = {
    offersList: OfferList[];
}

function FavoritesCardList ({offersList}: FavoritesCardListProps) {
    return(
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>      
              </div>
              <div className="favorites__places">
                {offersList.map((item)=>
                <FavoritesCard
                    id = {item.id}
                    title = {item.title}
                    type = {item.type}
                    price = {item.price}
                    isPremium = {item.isPremium}
                    previewImage = {item.previewImage}
                    rating={item.rating} 
                    isFavorite = {item.isFavorite}
                    />
                    
                )}

                {/* <FavoritesCardList offersList = {offersList}/> */}
                {/* <FavoritesCard /> */}
                
              </div>  
            </li> 

            {/* <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesCard />
              </div>
            </li> */}
          </ul>
    );
}

export {FavoritesCardList};
