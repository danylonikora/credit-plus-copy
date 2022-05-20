import React from "react";
import AvatarSvg from "/public/images/avatar.svg";
import * as styles from "./Review.module.scss";
import formatDate from "../../../utils/formatDate";

function Review(props) {
  // name, rating, location, timestamp, content

  function generateStars(filledStars) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={filledStars >= i ? styles.filledStar : styles.emptyStar}
        ></span>
      );
    }
    return stars;
  }

  return (
    <div className={styles.review}>
      <div className={styles.review__info}>
        <div className={styles.review__infoRow_1}>
          <AvatarSvg width="5rem" height="5rem" viewBox="0 0 100 100" />
          <div className={styles.review__nameAndRating}>
            <span className={styles.review__name}>{props.name}</span>
            <div className={styles.review__ratingContainer}>
              <div className={styles.review__startContainer}>
                {generateStars(props.rating)}
              </div>
              <span className={styles.review__rating}>{props.rating} / 5</span>
            </div>
          </div>
        </div>
        <div className={styles.review__infoRow_2}>
          <span className={styles.review__date}>
            {formatDate(Number(props.timestamp))}
          </span>
          <span className={styles.review__location}>{props.location}</span>
        </div>
      </div>
      <span className={styles.review__content}>{props.content}</span>
    </div>
  );
}

export default Review;
