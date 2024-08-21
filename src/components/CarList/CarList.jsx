import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect, useState } from 'react';
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
  selectLoading as selectCarsLoading 
} from '../../redux/favorites/selectors';

const CarList = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const carsData = useSelector(selectCars);
  const limit = useSelector(selectLimit);
  const loading = useSelector(selectCarsLoading);

   const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    setScrollPosition(window.scrollY);
    
    dispatch(getCamper({ page, limit, filters }));
  }, [dispatch, page, limit, filters]); 

    useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [carsData, scrollPosition]);


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
    {!loading && (
      <>
        <div>
          <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
        </div>
        <div className={css.content}>
          <ul className={css.carList}>
            {cars.length > 0 &&
              cars.map((advertElement) => (
                <Car key={advertElement._id} advertElement={advertElement} />
              ))}
          </ul>
        </div>
      </>
    )}
  </div>
  {!loading && page < totalPages && (
    <LoadMore onClick={handleLoadMore} />
  )}
</section>
    )
};

export default CarList;
