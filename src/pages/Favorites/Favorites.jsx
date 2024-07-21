import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/favorites/selectors';
import css from './Favorites.module.css';

const Favorites = () => {
    const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <div className={css.wrapper}>
      <ul className={css.favoriteCarsList}>
      {favoriteCars.map(car => (
        <li key={car._id} className={css.carItem}>
          <img src={car.gallery[0]} alt={car.name} className={css.image} />
          <div className={css.info}>
            <h3>{car.name}</h3>
            <p className={css.price}>&euro;{car.price}.00</p>
            <p className={css.location}>{car.location}</p>
          </div>
        </li>
      ))}
    </ul>
 </div>
  )
}

export default Favorites;
