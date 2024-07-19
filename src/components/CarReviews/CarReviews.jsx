import css from "./CarReviews.module.css"
import Reviews from "../../components/Reviews/Reviews";

const CarReviews = ({data}) => {
    return (
        <div className={css.containerReviews}>
          <Reviews db={data} />  
        </div>
    )
};

export default CarReviews;
