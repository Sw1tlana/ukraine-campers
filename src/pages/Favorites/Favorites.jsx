import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/favorites/selectors';
import { icons as sprite } from '../../shared/icons';
import css from './Favorites.module.css';
import { Helmet } from "react-helmet-async";
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/favorites/slice';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  const dispatch = useDispatch();

const handleFavoriteClick = (car) => {
  if (favoriteCars.some(favCar => favCar._id === car._id)) {
    dispatch(deleteFavorite(car._id));
  } else {
    dispatch(addFavorite(car));
  }
};
  

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
    <ul className={css.favoriteCarsList}>
      {favoriteCars.map((car, index) => (
        <li key={car._id || index} className={css.carItem}>
          <img
            className={css.image}
            src={car.gallery && car.gallery.length > 0 ? car.gallery[0] : ''}
            alt={car.name}
          />
          <div className={css.wrapperInfo}>
            <div className={css.containerInfo}>
              <div className={css.info}>
                <h3>{car.name}</h3>
                <div className={css.price}>
                  <p>&euro;{car.price}.00</p>
                  <button 
                    type="button" 
                    className={css.btnHeart}
                    onClick={() => handleFavoriteClick(car)}
                  >
                    <svg width={20} height={20}>
                      <use 
                        className={`${css.iconHeart} ${favoriteCars.some(favCar => favCar._id === car._id) ? css.favorite : ''}`}
                        xlinkHref={`${sprite}#icon-heart`} 
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={css.ratingInfo}>
                <p className={css.rating}>
                  <svg width={20} height={20}>
                    <use className={css.iconRating} xlinkHref={`${sprite}#icon-rating`} />
                  </svg>
                  <span className={css.underlined}>{car.rating}
                    ({Array.isArray(car.reviews) ? car.reviews.length : 0} Reviews)</span>
                </p>
                <p className={css.rating}>
                  <svg width={20} height={20}>
                    <use className={css.iconLocation} xlinkHref={`${sprite}#icon-location`} />
                  </svg>
                  {car.location}
                </p>
              </div>
            </div>
            <div className={css.description}>
              <p className={css.descriptionText}>{car.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul> 
    </>
  )
};

export default Favorites;
