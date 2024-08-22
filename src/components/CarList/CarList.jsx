import Car from '../Car/Car';
import css from './CarList.module.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import { setPage, setFilters } from '../../redux/favorites/slice';
import { getCamper, searchCampers } from '../../redux/favorites/operation';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';

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
  console.log('Cars data from Redux:', carsData);
  const limit = useSelector(selectLimit);
  const loading = useSelector(selectLoading);
    console.log('Loading:', loading);
  console.log('Cars data from Redux:', carsData);

  const scrollPosition = useRef(0);

    useEffect(() => {
    scrollPosition.current = window.scrollY; 
  }, []);


  useEffect(() => {   
    console.log('Fetching data with filters:', filters);
    
    dispatch(filters && Object.keys(filters).length > 0
        ? searchCampers({ page, limit, filters }) 
        : getCamper({ page, limit }));
  }, [dispatch, page, limit, filters]); 

  useEffect(() => {
    console.log('Scroll position:', scrollPosition.current);
    if (!loading) {
      window.scrollTo(0, scrollPosition.current);
    }
  }, [carsData, scrollPosition, loading]);


    const handleLoadMore = () => {
          if (page < totalPages) {
            dispatch(setPage(page + 1));
            console.log('Dispatching searchCampers with filters:', filters);
            dispatch(searchCampers({ page: page + 1, limit, filters }));
        }
    };
    
  const handleSearch = (query) => {
  const newFilters = { ...filters, location: query };
  console.log('Updated filters:', newFilters);
  dispatch(setFilters(newFilters));
  dispatch(setPage(1));
  
  };

  const cars = carsData?.campers || [];
  
console.log('Cars data:', cars);
  return (
    <section className={css.containerContactList}>
        <div className={css.container}>
            {loading ? <SpinnerLoader /> : (
                <>
                    <div>
                        <IconSearchBar onSubmit={handleSearch} className={css.searchBar} />
                    </div>
                    <div className={css.content}>
                        <ul className={css.carList}>
                            {cars.length > 0 ? (
                                cars.map((advertElement) => (
                                    <Car key={advertElement._id} advertElement={advertElement} />
                                ))
                            ) : (
                                <li>No cars found</li> // Додайте повідомлення про відсутність даних
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
    )
};

export default CarList;
