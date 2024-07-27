import Car from '../Car/Car';
import css from './CarList.module.css';
import advertData from '../../shared/data/data.json';
import LoadMore from '../LoadMore/LoadMore';
import IconSearchBar from '../IconSearchBar/IconSearchBar';
import { useState } from 'react';

const CarList = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [filteredData, setFilteredData] = useState(advertData);

    const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
    };
    
    const handleSearch = (query) => {
    const filtered = advertData.filter(advertElement =>
      advertElement.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setVisibleCount(4);
    };
    
  return (
      <>
        <div className={css.container}>
            <IconSearchBar onSubmit={handleSearch} className={css.searchBar}/>
             <div className={css.content}>
                <ul className={css.carList}>
                {filteredData.slice(0, visibleCount).map((advertElement) => (
               <Car key={advertElement._id} advertElement={advertElement} />
        ))}
            </ul>
         </div>
      </div>
        {visibleCount < filteredData.length && (
        <LoadMore onClick={handleLoadMore} />
      )} 
    </>
    )
};

export default CarList;
