import { NavLink, useLocation  } from "react-router-dom";
import Container from "../../components/Container/Container";
import clsx from "clsx";
import { FcAutomotive } from "react-icons/fc";
import css from "./AppBar.module.css";
import { useState } from "react";
import NavLinks from "../NavLinks/Navlinks";

const AppBar = () => {
  const location = useLocation(); 
  const isHome = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
 
  return (
    <>
    <header className={clsx(css.header, isHome && css.homePageHeader)}>
      <Container>
        <div className={css.centered}>
          <NavLink to="/" onClick={closeMenu}>
            <FcAutomotive className={clsx(css.logo, isHome && css.homePageLogo)} />
          </NavLink>
        </div>
          <div className={css.burgerContainer}>
          <button className={css.burgerButton} onClick={toggleMenu}>
            <span className={css.line1}></span>
            <span className={css.line2}></span>
            <span className={css.line3}></span>
          </button>
          <nav className={clsx(css.burgerMenu, isMenuOpen && css.show)}>
            <NavLinks isHome={isHome} closeMenu={closeMenu} />
          </nav>
        </div>
        <nav className={css.nav}>
          <NavLinks isHome={isHome} />
        </nav>
      </Container>
      </header>
    </>
  )
}

export default AppBar;
