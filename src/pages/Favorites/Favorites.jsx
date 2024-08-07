import { selectFavoriteCars } from '../../redux/favorites/selectors';
import css from './Favorites.module.css';import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";
import { useDispatch } from 'react-redux';
import { icons as sprite } from '../../shared/icons';
import { addFavorite, deleteFavorite } from '../../redux/favorites/slice';


const Favorites = () => {

  const favoriteCars = useSelector(selectFavoriteCars);

  const dispatch = useDispatch();

  const handleFavoriteClick = (carId) => {
    const isFavorite = favoriteCars.some(car => car._id === carId);
    
    if (isFavorite) {
      dispatch(deleteFavorite(carId));
    } else {
      dispatch(addFavorite({ _id: carId })); 
    }
  };
  
  return (
    <section>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {favoriteCars.length > 0 ? (
        <ul className={css.favoriteCarsList}>
          {favoriteCars.length > 0 && favoriteCars.map((car) => (
            <li key={car._id} className={css.carItem}>
              <img
                className={css.image}
                src={car.gallery[0]}
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
                        onClick={() => handleFavoriteClick(car._id)}
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
                      <span className={css.underlined}>{car.rating} ({car.reviews.length} Reviews)</span>
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
      ) : (
      <div className={css.camperContainer}>
        <div className={css.camper}>
          <div className={`${css.wheel} ${css.frontWheel}`}></div>
          <div className={`${css.wheel} ${css.backWheel}`}></div>
            </div>
             <p className={css.addToFavorites}>Add to Favorites</p>
      </div>
        )}
    </section>
  )
};

export default Favorites;
