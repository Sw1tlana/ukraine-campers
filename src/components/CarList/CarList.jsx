import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import { setPage, setFilters } from '../../redux/favorites/slice';
import { getCamper } from '../../redux/favorites/operation';
import { selectCars } from '../../redux/favorites/selectors';

const CarList = () => {
  const dispatch = useDispatch();
  const { cars = [], isLoading, totalPages, page, filters } = useSelector(selectCars);

  useEffect(() => {

        dispatch(getCamper({ page, limit: 4, filters }));
      }, [dispatch, page, filters]);
  
  
    const handleLoadMore = () => {
          if (page < totalPages) {
            dispatch(setPage(page + 1));
        }
    };
    
    const handleSearch = (query) => {
      dispatch(setFilters({ ...filters, location: query }));
      dispatch(setPage(1)); 
    };
    
  return (
     <section>
      <div className={css.container}>
        <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
        <div className={css.content}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul className={css.carList}>
              {cars.length > 0 ? (
                cars.map((advertElement) => (
                  <Car key={advertElement._id} advertElement={advertElement} />
                ))
              ) : (
                <p>No cars found</p>
              )}
            </ul>
          )}
        </div>
      </div>
      {page < totalPages && !isLoading && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </section>
    )
};

export default CarList;
