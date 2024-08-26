import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/favorites/slice';
import { searchCampers } from '../../redux/search/operations';
import { getCamper } from '../../redux/favorites/operation';
import {
  selectSearchLoading
} from '../../redux/search/selectors'; 
import {
  selectFilters,
  selectTotalPages,
  selectPage,
  selectLimit,
  selectCars,
  selectFilteredCampers
} from '../../redux/favorites/selectors';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect, useRef } from 'react';
import Loader from '../../shared/components/Loader/Loader';

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
    if (!loading && page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handleSearch = (query) => {
    const newFilters = { ...filters, location: query };
    dispatch(searchCampers({ page: 1, limit, filters: newFilters, location: query }));
    dispatch(setPage(1));
  };

    console.log('searchData:', searchData);
  console.log('carsData:', carsData);

 const cars = Array.isArray(searchData) && searchData.length ? searchData : carsData?.campers || [];

return (
    <section className={css.containerContactList}>
      <div className={css.container}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div>
              <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
            </div>
            <div className={css.content}>
              {Array.isArray(cars) && cars.length > 0 ? (
                <ul className={css.carList}>
                  {cars.map((advertElement) => (
                    <Car key={advertElement._id} advertElement={advertElement} />
                  ))}
                </ul>
              ) : (
                <p>No cars available</p>  
              )}
            </div>
          </>
        )}
      </div>
      {!loading && page < totalPages && (
        <div className={css.loadMoreContainer}>
          <LoadMore onClick={handleLoadMore} />
        </div>
      )}
    </section>
  );
};

export default CarList;
