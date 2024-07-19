import css from "./Reviews.module.css";

const Reviews = ({db}) => {
    return (
        <div>
    <ul className={css.reviewsList}>
      {db.reviews.map((review, index) => (
        <li className={css.reviewItem} key={index}>
          <div className={css.nameContainer}>
            <div className={css.containerReviews}>
              {review.reviewer_name[0]}
            </div>
            <div className={css.nameTitle}>
              <h3>{review.reviewer_name}</h3>
            </div>
          </div>
          <p className={css.review}>{review.comment}</p>
        </li>
      ))}
    </ul>
        </div>
    )
};

export default Reviews;
