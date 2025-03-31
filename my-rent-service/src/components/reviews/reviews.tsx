import { Review } from "../../types/review";

type ReviewsProps = {
    reviewsData: Review;
}

function Reviews({reviewsData}: ReviewsProps) {

    return(
        <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={reviewsData.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {reviewsData.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${(reviewsData.rating/5)*100}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
           {reviewsData.comment}
          </p>
          <time className="reviews__time" datatype="2019-04-24">{reviewsData.date}</time>
        </div>
      </li>
    )
}

export {Reviews};