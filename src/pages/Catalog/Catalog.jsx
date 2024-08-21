import { Helmet } from "react-helmet-async";
import CarList from "../../components/CarList/CarList";
import css from "./Catalog.module.css";
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/favorites/selectors';


function Catalog() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <div className={css.catalogList}>
        {loading && !error}
        <CarList />
      </div>
  </>
  )
}

export default Catalog;