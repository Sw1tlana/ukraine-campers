import { Helmet } from "react-helmet-async";
import CarList from "../../components/CarList/CarList";
import css from "./Catalog.module.css";

function Catalog() {
  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
    <div className={css.catalogList}>
      <CarList/>
    </div>
  </>
  )
}

export default Catalog;