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
  selectLimit
} from '../../redux/favorites/selectors';

const CarList = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const carsData = useSelector(selectCars);
  const limit = useSelector(selectLimit);


  useEffect(() => {
      console.log('Loading cars with:', { page, limit, filters });
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

  
  const filteredLocalData = cars.filter(item => {
      return (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase()));
  });
  
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const displayedCars = filteredLocalData.slice(startIndex, endIndex);

  console.log('Page:', page);
  console.log('Total Pages:', totalPages);
  console.log('Displayed Cars:', JSON.stringify(displayedCars, null, 2));
  console.log('Filtered Local Data:', JSON.stringify(filteredLocalData, null, 2));

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
