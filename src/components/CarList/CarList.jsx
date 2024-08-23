import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/favorites/slice';
import { searchCampers } from '../../redux/search/operations';
import { getCamper } from '../../redux/favorites/operation';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import {
  selectFilteredCampers,
  selectSearchLoading
} from '../../redux/search/selectors'; 
import {
  selectFilters,
  selectTotalPages,
  selectPage,
  selectLimit,
  selectCars
} from '../../redux/favorites/selectors';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect, useRef } from 'react';

const CarList = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const limit = useSelector(selectLimit);
  const searchData = useSelector(selectFilteredCampers);
  const carsData = useSelector(selectCars); 
  const loading = useSelector(selectSearchLoading);


  const scrollPosition = useRef(0);

  useEffect(() => {
    scrollPosition.current = window.scrollY; 
  }, []);

  useEffect(() => {
    dispatch(getCamper({ page, limit, filters }));
  }, [dispatch, page, limit, filters]);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, scrollPosition.current);
    }
  }, [carsData, loading]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
      dispatch(searchCampers({ page: page + 1, limit, filters, location: filters.location }));
    }
  };

  const handleSearch = (query) => {
    const newFilters = { ...filters, location: query };
    dispatch(searchCampers({ page: 1, limit, filters: newFilters, location: query }));
    dispatch(setPage(1));
  };

   const cars = filters.location ? carsData?.campers || [] : searchData?.campers || [];

  return (
    <section className={css.containerContactList}>
      <div className={css.container}>
        {loading ? <SpinnerLoader /> : (
          <>
            <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
            <div className={css.content}>
<ul className={css.carList}>
  {cars.length > 0 ? (
    cars.map((advertElement) => (
      <Car key={advertElement._id} advertElement={advertElement} />
    ))
  ) : (
    <li>No cars found for the current filters</li>
  )}
</ul>
            </div>
          </>
        )}
      </div>
      {!loading && page < totalPages && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </section>
  );
};

export default CarList;
