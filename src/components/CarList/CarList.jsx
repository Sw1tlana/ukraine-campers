import Car from '../Car/Car';
import css from './CarList.module.css';
import advertData from '../../shared/data/data.json';

const CarList = () => {
    return (
      <ul className={css.carList}>
            {advertData.map((advertElement) => (
        <Car key={advertElement._id} advertElement={advertElement} />
            ))}
    </ul>

    
    )
};

export default CarList;
