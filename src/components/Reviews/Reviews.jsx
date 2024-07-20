// import css from "./Reviews.module.css";

const Reviews = ({ data }) => {
  return (
    <ul>
      {data.map((review, index) => (
        <li key={index}>
          <p><strong>{review.author}</strong>: {review.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
