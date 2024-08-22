import css from './SpinnerLoader.module.css';

const SpinnerLoader = () => {
    return (
    <div className={css.loader}>
      <div className={`${css.circle} ${css.circle1}`}></div>
      <div className={`${css.circle} ${css.circle2}`}></div>
        <div className={`${css.circle} ${css.circle3}`}></div>
    </div>
    )
};

export default SpinnerLoader;




