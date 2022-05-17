import React from "react";
import AvatarSvg from "../../assets/images/avatar.svg";
import "./Review.scss";
import formatDate from "../../utils/formatDate";

function Review(props) {
  // name, rating, location, timestamp, content

  function generateStars(filledStars) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={filledStars >= i ? "filled-star" : "empty-star"}
        ></span>
      );
    }
    return stars;
  }

  return (
    <div className="review">
      <div className="review__info">
        <div className="review__info-row-1">
          <AvatarSvg width="5rem" height="5rem" viewBox="0 0 100 100" />
          <div className="review__name-and-rating">
            <span className="review__name">{props.name}</span>
            <div className="review__rating-container">
              <div className="review__stars-container">
                {generateStars(props.rating)}
              </div>
              <span className="review__rating">{props.rating} / 5</span>
            </div>
          </div>
        </div>
        <div className="review__info-row-2">
          <span className="review__date">
            {formatDate(Number(props.timestamp))}
          </span>
          <span className="review__location">{props.location}</span>
        </div>
      </div>
      <span className="review__content">{props.content}</span>
    </div>
  );
}

export default Review;
