import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import clsx from "clsx";
import { FcAutomotive } from "react-icons/fc";
import css from "./AppBar.module.css";

const Link = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const AppBar = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.centered}>
          <NavLink to="/">
           <FcAutomotive className={css.logo}/>
          </NavLink>
        </div>
          <nav>
            <NavLink to="/" className={Link}>
                Home  
              </NavLink>
               <NavLink to="catalog" className={Link}>
                Catalog
                </NavLink>
                <NavLink to="favorites" className={Link}>
                 Favorites
                </NavLink>
           </nav>
      </Container>
      </header>
  )
}

export default AppBar;
