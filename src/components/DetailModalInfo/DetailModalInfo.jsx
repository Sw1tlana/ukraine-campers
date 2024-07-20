import { icons as sprite } from "../../shared/icons/index";
import css from "./DetailModalInfo.module.css";
import clsx from "clsx";
import { useState } from "react";

import CarFeatures from "../../components/CarFeatures/CarFeatures";
import CarReviews from "../../components/CarReviews/CarReviews"

const DetailModalInfo = ({ db }) => {
  const [active, setActive] = useState("features");
  
    const handleClick = (component) => {
    setActive(component);
  };

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
    <ul className={css.addInfromList}>
      {['features', 'reviews'].map(item => (
        <li
          key={item}
          className={clsx(css.addInfromItem, {
            [css.active]: active === item,
          })}
          onClick={() => handleClick(item)}
        >
          {item === 'features' ? 'Features' : 'Reviews'}
        </li>
      ))}
    </ul>
  </nav>

  {active === "features" ? <CarFeatures data={db} /> : <CarReviews data={db} />}

</>
    )
};

export default DetailModalInfo;
