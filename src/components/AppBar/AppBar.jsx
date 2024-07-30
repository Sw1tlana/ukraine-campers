import { NavLink, useLocation  } from "react-router-dom";
import Container from "../../components/Container/Container";
import clsx from "clsx";
import { FcAutomotive } from "react-icons/fc";
import css from "./AppBar.module.css";

const AppBar = () => {
  const location = useLocation(); 
  const isHome = location.pathname === "/"; 

  return (
    <header className={clsx(css.header, isHome && css.homePageHeader)}>
      <Container>
        <div className={css.centered}>
          <NavLink to="/">
           <FcAutomotive className={clsx(css.logo, isHome && css.homePageLogo)}/>
          </NavLink>
        </div>
          <nav>
          <NavLink to="/" className={({ isActive }) =>
            clsx(css.link, isActive && css.active, isHome && css.homePageLink)}>
                Home  
              </NavLink>
          <NavLink to="catalog" className={({ isActive }) =>
            clsx(css.link, isActive && css.active, isHome && css.homePageLink)}>
                Catalog
                </NavLink>
          <NavLink to="favorites" className={({ isActive }) =>
            clsx(css.link, isActive && css.active, isHome && css.homePageLink)}>
                 Favorites
                </NavLink>
           </nav>
      </Container>
      </header>
  )
}

export default AppBar;
