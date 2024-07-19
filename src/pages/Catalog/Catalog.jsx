import IconSearchBar from "../../components/IconSearchBar/IconSearchBar";
import CarList from "../../components/CarList/CarList";
import css from "./Catalog.module.css";

function Catalog() {
  return (
    <div className={css.catalogList}>
      <IconSearchBar />
      <CarList/>
    </div>
  )
}

export default Catalog;