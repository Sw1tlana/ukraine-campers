import { icons as sprite } from '../../shared/icons';
import css from './Car.module.css';
import { useState } from 'react';
import ModalWindow from '../../shared/components/ModalWindow/ModalWindow';
import DetailModalInfo from '../DetailModalInfo/DetailModalInfo';

import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/favorites/slice';
import { selectFavoriteCars } from '../../redux/favorites/selectors';


const Car = ({advertElement}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  
  const isFavorite = favoriteCars.some(car => car._id === advertElement._id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(advertElement._id));
    } else {
      dispatch(addFavorite(advertElement));
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <>
        <li className={css.carItem}>
        <img
        className={css.image}
        src={advertElement.gallery[0]}
        alt={advertElement.name}
        />
      <div className={css.wrapperInfo}>
      <div className={css.containerInfo}>
        <div className={css.info}>
            <h3>{advertElement.name}</h3>
              <div className={css.price}>
                <p>&euro;{advertElement.price}.00</p>

                <button type="button" className={css.btnHeart} onClick={handleFavoriteClick}>
                <svg width={20}
                  height={20}
                >
                  <use className={`${css.iconHeart} ${isFavorite ? css.favorite : ''}`
                  } xlinkHref={`${sprite}#icon-heart`} />
                </svg>
                </button>
                
              </div>
            </div>
            <div className={css.ratingInfo}>
          <p className={css.rating}><svg width={20} height={20}>
            <use className={css.iconRating}  xlinkHref={`${sprite}#icon-rating`} />
          </svg>
          <span className={css.underlined}>{advertElement.rating} ({advertElement.reviews.length} Reviews)</span></p>
          <p className={css.rating}><svg width={20} height={20}>
              <use className={css.iconLocation}  xlinkHref={`${sprite}#icon-location`} />
            </svg>
              {advertElement.location}</p>
            </div>
        </div>
        
        <div className={css.description}>
            <p className={css.descriptionText}>{advertElement.description}</p>
        </div>
        
          <ul className={css.listIconGroup}>

            <li>
              <div className={css.containerIconGroup}>
              <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-Users`} />
              </svg>
              <p>{advertElement.adults} adults</p>
              </div>
            </li>

            <li>
              <div className={css.containerIconGroup}>
              <svg width={20} height={20}>
              <use  className={css.icon}  xlinkHref={`${sprite}#icon-authomatic`} />
              </svg>
                <p>Authomatic</p>
              </div>
            </li>

            <li>
              <div className={css.containerIconGroup}>
              <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-petrol`} />
              </svg>
              <p>Petrol</p>
              </div>
            </li>

               {advertElement.details.kitchen && (
              <li>
                <div className={css.containerIconGroup}>
              <svg width={20} height={20}>
                <use  className={css.icon} xlinkHref={`${sprite}#icon-kitchen`} />
              </svg>
                  <p >Kitchen</p>
                </div>
            </li>
            )}
            
            <li>
              <div className={css.containerIconGroup}>
            <svg width={20} height={20}>
              <use  className={css.icon} xlinkHref={`${sprite}#icon-beds`} />
              </svg>
                <p>{advertElement.details.beds} beds</p>
                </div>
            </li>

            <li>
              <div className={css.containerIconGroup}>
              <svg width={20} height={20}>
              <use className={css.iconGroup} xlinkHref={`${sprite}#icon-AC`} />
              </svg>
              <p>{advertElement.details.airConditioner} AC</p>
              </div>
            </li>
          </ul>
              <button className={css.btnShowMore} onClick={openModal}>Show more</button>
        </div>

      <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
          <DetailModalInfo db={advertElement} />
      </ModalWindow>
      </li>           
    </>
      
    )
};

export default Car;


