import { icons as sprite } from "../../shared/icons/index";
import css from "./DetailModalInfo.module.css";
import { useState } from "react";
import clsx from "clsx";
import CustomScrollWrapper from "../../shared/components/CustomScrollWrapper/CustomScrollWrapper";
import CarFeatures from "../CarFeatures/CarFeatures";
import CarReviews from "../CarReviews/CarReviews";


const DetailModalInfo = ({ db }) => {
  const [active, setActive] = useState("features");
  
  const handleClick = (tab) => {
       console.log(tab);
    setActive(tab);
  };
  const isDetailsValid = db && db.details && typeof db.details === 'object';

    return (
      <>
        <div className={css.containerInfo}>
        <div className={css.info}>
            <h3 className={css.titleInfo}>{db.name}</h3>
            </div>
            <div className={css.ratingInfo}>
          <p className={css.rating}><svg width={20} height={20}>
            <use className={css.iconRating}  xlinkHref={`${sprite}#icon-rating`} />
          </svg>
          <span className={css.underlined}>{db.rating} ({db.reviews.length} Reviews)</span></p>
          <p className={css.rating}><svg width={20} height={20}>
              <use className={css.iconLocation}  xlinkHref={`${sprite}#icon-location`} />
            </svg>
              {db.location}</p>
                </div>
            <div className={css.price}>
              <p>&euro;{db.price}.00</p>
            </div> 
        </div>

         <CustomScrollWrapper>
        <div className={css.containerWrapp}>
        <ul className={css.listModalimg}>
        {db.gallery.map((img, index) => (
          <li key={index}>
            <img className={css.itemImg} src={img} alt={db.name} />
          </li>
        ))}
      </ul>

      <p className={css.description}>{db.description}</p>
      </div>
          
     <nav>
        <ul className={css.informList}>
            <li
                className={clsx(css.informItem, {
                    [css.active]: active === "features",
                })}
                onClick={() => handleClick("features")}
            >
                Features
            </li>
            <li
                className={clsx(css.informItem, {
                    [css.active]: active === "reviews",
                })}
                onClick={() => handleClick("reviews")}
            >
                Reviews
            </li>
        </ul>
    </nav>
        {active === "features" && isDetailsValid && <CarFeatures data={{
            ...db.details,
            adults: db.adults,
            transmission: db.transmission,
            form: db.form,
            length: db.length,
            width: db.width,
            height: db.height,
            tank: db.tank,
            consumption: db.consumption,
        }} />}
        {active === "reviews" && <CarReviews data={db.reviews} />}
   </CustomScrollWrapper>
</>
    )
};

export default DetailModalInfo;
