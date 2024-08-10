import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./NavLinks.module.css";

const NavLinks = ({ isHome, closeMenu }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          clsx(css.link, isActive && css.active, isHome && css.homePageLink)
        }
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          clsx(css.link, isActive && css.active, isHome && css.homePageLink)
        }
        onClick={closeMenu}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          clsx(css.link, isActive && css.active, isHome && css.homePageLink)
        }
        onClick={closeMenu}
      >
        Favorites
      </NavLink>
    </>
  );
};

export default NavLinks;