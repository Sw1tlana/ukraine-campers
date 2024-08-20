import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import { setPage, setFilters } from '../../redux/favorites/slice';
import { getCamper } from '../../redux/favorites/operation';
import { selectFilters, selectTotalPages, selectPage, selectCars} from '../../redux/favorites/selectors';

const CarList = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const cars = useSelector(selectCars);

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
  
    const filteredLocalData = cars.filter(item => {
      return (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase()));
  });
    
  const displayedCars = filteredLocalData.slice(0, page * 4);

  return (
     <section className={css.containerContactList}>
      <div className={css.container}>
        <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
        <div className={css.content}>
            <ul className={css.carList}>
            {displayedCars.length > 0 &&
              displayedCars.map((advertElement) => (
                <Car key={advertElement._id} advertElement={advertElement} />
              ))
            }
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
