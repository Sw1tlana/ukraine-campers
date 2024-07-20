import css from "./CarReviews.module.css";
import Rating from '@mui/material/Rating';
import FormBook from '../FormBook/FormBook';

const CarReviews = ({ data }) => {
  return (
    <div className={css.containerFormReviews}>
    <ul className={css.reviewsContainer}>
      {data.map((review, index) => (
        <li key={index} className={css.reviewInfo}>
          <h4 className={css.reviewerName}>{review.reviewer_name}</h4>
          <Rating
            className={css.iconsRating}
            name="half-rating-read"
            defaultValue={review.reviewer_rating}
            precision={0.5}
            readOnly
          />
          <p className={css.reviewComment}>{review.comment}</p>
        </li>
      ))}
      </ul>
      <FormBook/>
    </div>
  );
};

export default CarReviews;
