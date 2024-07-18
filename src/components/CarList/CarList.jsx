import Car from '../Car/Car';
import css from './CarList.module.css';
const CarList = () => {
    return (
        <ul className={css.carList}>
            <Car />
            <Car />
            <Car />
            <Car/>

        </ul>
    )
};

export default CarList;
