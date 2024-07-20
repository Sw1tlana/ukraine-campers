import { icons as sprite } from '../../shared/icons';
import css from "./IconSearchBar.module.css";

const IconSearchBar = () => {
    return (
    <div>
       <div className={css.searchContainer}>
        <h2 className={css.title}>Location</h2>
                <div className={css.searchContainerLocation}>
                    <div className={css.iconWrapper}>
            <svg width={20} height={20}>
                <use className={css.iconLocation} xlinkHref={`${sprite}#icon-location`} />
            </svg>
                </div>
               <input className={css.searchInput} type="text" placeholder='City' />
            </div>
            </div>
                <h2 className={`${css.title} ${css.filter}`}>Filters</h2>
             <p className={css.text}>Vehicle equipment</p>
             <p className={css.border}></p>

            <ul className={css.listEquipment}>
                <li>
                    <div className={css.containerSearchIcon}>
                <svg width={28} height={24}>
                    <use xlinkHref={`${sprite}#icon-AC`} />
                </svg>
                        <p>AC</p>
                    </div>
                </li>
                
                <li>
                    <div className={css.containerSearchIcon}>
                <svg width={28} height={24}>
                   <use className={css.icon} xlinkHref={`${sprite}#icon-authomatic`} />
                </svg>
                        <p>Authomatic</p>
                    </div>
                </li>

                <li>
                    <div className={css.containerSearchIcon}>
                <svg width={28} height={24}>
                    <use className={css.icon} xlinkHref={`${sprite}#icon-kitchen`} />
                 </svg>
                        <p>Kitchen</p>
                    </div>
                </li>

                <li>
                    <div className={css.containerSearchIcon}>
                <svg width={28} height={24}>
                    <use className={css.icon} xlinkHref={`${sprite}#icon-TV`} />
                </svg>
                        <p>TV</p>
                    </div>
                </li>

                <li>
                    <div className={css.containerSearchIcon}>
                <svg width={28} height={24}>
                    <use className={css.icon} xlinkHref={`${sprite}#icon-WC`} />
                </svg>
                        <p>Shower/WC</p>
                    </div>
                </li>

          </ul>
            <div>
                <div>
                    <p className={css.text}>Vehicle type</p>
                     <p className={css.border}></p>
                    <ul className={css.listEquipment}>
                        <li className={css.containerSearchIcon}>
                            <svg width={40} height={28}>
                                <use  xlinkHref={`${sprite}#icon-VAN`} />
                            </svg>
                        </li>
                        <li className={css.containerSearchIcon}>
                           <svg width={40} height={28}>
                                <use  xlinkHref={`${sprite}#icon-Fully`} />
                           </svg>
                        </li>
                        <li className={css.containerSearchIcon}>
                            <svg width={40} height={28}>
                                 <use  xlinkHref={`${sprite}#icon-Alcove`} />
                            </svg>
                        </li>
                    </ul>
                </div>

            </div>
             <button className={css.btnSearch}>Search</button>
        </div>
    )
};

export default IconSearchBar;

