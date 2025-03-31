import { Reviews } from "../reviews/reviews";
import { Review } from "../../types/review";

type ReviewsListProps = {
    reviewsData: Review[];
}

function ReviewsList({reviewsData}: ReviewsListProps) {
   
    return(
        <ul className="reviews__list">
            {reviewsData.map((item) => <Reviews reviewsData={item}/>)}
        </ul>
    );    
}

export {ReviewsList}

