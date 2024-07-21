import css from "./LoadMore.module.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const allItems = [...Array(20).keys()].map(i => `Item ${i + 1}`);
    
const LoadMore = () => {
 const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = allItems.slice(offset, offset + itemsPerPage);

    return (
        <div className={css.containerLoadMore}>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={Math.ceil(allItems.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={css.pagination}
                activeClassName={css.active}
            />
        </div>
    );
};



export default LoadMore;
