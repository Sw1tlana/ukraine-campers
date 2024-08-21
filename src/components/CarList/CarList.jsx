import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import { setPage, setFilters } from '../../redux/favorites/slice';
import { getCamper } from '../../redux/favorites/operation';

import {
  selectFilters,
  selectTotalPages,
  selectPage,
  selectCars,
  selectLimit,
  selectLoading
} from '../../redux/favorites/selectors';

const CarList = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const carsData = useSelector(selectCars);
  const limit = useSelector(selectLimit);
  const loading = useSelector(selectLoading);


  useEffect(() => {
    dispatch(getCamper({ page, limit, filters }));
  }, [dispatch, page, limit, filters]); 


    const handleLoadMore = () => {
          if (page < totalPages) {
            dispatch(setPage(page + 1));
        }
    };
    
    const handleSearch = (query) => {
      dispatch(setFilters({ ...filters, location: query }));
      dispatch(setPage(1)); 
  };

  const cars = carsData?.campers || [];

  return (
     <section className={css.containerContactList}>
      <div className={css.container}>
        <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
        <div className={css.content}>

            <ul className={css.carList}>
            {!loading && cars.length > 0 &&
             cars.map((advertElement) => (
               <Car key={advertElement._id}
                advertElement={advertElement}
               />
              ))
            }
          </ul>

        </div>
      </div>
      {!loading && page < totalPages && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </section>
    )
};

export default CarList;
