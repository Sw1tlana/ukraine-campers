import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import { setPage, setFilters } from '../../redux/favorites/slice';
import { getCamper } from '../../redux/favorites/operation';
import { selectCars, selectFilters,selectTotalPages, selectPage } from '../../redux/favorites/selectors';
import localData from '../../shared/data/data.json';

const CarList = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const cars = useSelector(selectCars);

  useEffect(() => {
console.log('Fetching campers with:', { page, filters });
        dispatch(getCamper({ page, limit: 4, filters }));
  }, [dispatch, page, filters]);
  console.log('Cars:', cars);
console.log('Total Pages:', totalPages);
console.log('Current Page:', page);
console.log('Filters:', filters);
  
  
    const handleLoadMore = () => {
          if (page < totalPages) {
            dispatch(setPage(page + 1));
        }
    };
    
    const handleSearch = (query) => {
      dispatch(setFilters({ ...filters, location: query }));
      dispatch(setPage(1)); 
  };
  
    const filteredLocalData = localData.filter(item => {
      return (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase()));
  });
    
  return (
     <section>
      <div className={css.container}>
        <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
        <div className={css.content}>
            <ul className={css.carList}>
              {filteredLocalData.length > 0 ? (
                filteredLocalData.map((advertElement) => (
                  <Car key={advertElement._id} advertElement={advertElement} />
                ))
              ) : (
                <p>No cars found</p>
              )}
            </ul>
        </div>
      </div>
      {page < totalPages && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </section>
    )
};

export default CarList;
