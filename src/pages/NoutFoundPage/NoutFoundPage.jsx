import { NavLink } from 'react-router-dom';
import css from "./NoutFoundPage.module.css";
import Container from "../../components/Container/Container";

const NoutFoundPage = () => {
    return (
<Container>
  <div className={css.positionCat}>
    <h2 className={css.titlePage}>404</h2>
    <p className={css.message}>
      {`Don't panic, take a sip of water and go back to main page to try again.`}
    </p>
    <NavLink to="/" className={css.goBack}>
      Return to the main page
    </NavLink>
    <div className={css.cat}>
      <div className={css.ears}>
        <div className={`${css.ear} ${css.rightSide}`}></div>
        <div className={`${css.ear} ${css.leftSide}`}></div>
      </div>
      <div className={css.face}>
        <div className={css.catEyes}>
          <div className={`${css.eye} ${css.leftSide}`}>
            <div className={css.eyePupil}></div>
          </div>
          <div className={`${css.eye} ${css.rightSide}`}>
            <div className={css.eyePupil}></div>
          </div>
        </div>
        <div className={css.nose}></div>
      </div>
    </div>
  </div>
</Container>
    )
};

export default NoutFoundPage;
