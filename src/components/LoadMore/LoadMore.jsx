import css from "./LoadMore.module.css";
    
const LoadMore = ({onClick}) => {
    return (
        <div className={css.containerLoadMore}>
            <button className={css.loadMoreBtn} type="button"
                onClick={onClick}>Load more</button>
        </div>
    );
};



export default LoadMore;
