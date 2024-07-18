import { icons as sprite } from '../../shared/icons';

const IconSearchBar = () => {
    return (
        <div>
       <div>
        <h2>Location</h2>
        <div>
          <svg>
            <use  xlinkHref={`${sprite}#icon-location`} />
          </svg>
        <input  type="text" placeholder='City'/></div>
            </div>
                <h2>Filters</h2>
            <p>Vehicle equipment</p>
            <ul>
            <li>
              <svg>
                  <use  xlinkHref={`${sprite}#icon-AC`} />
              </svg>
            </li>
                <li>
                <svg>
                   <use  xlinkHref={`${sprite}#icon-authomatic`} />
                </svg>
                </li>
                <li>
                <svg>
                    <use xlinkHref={`${sprite}#icon-kitchen`} />
                </svg>
                </li>
                <li>
                <svg>
                    <use  xlinkHref={`${sprite}#icon-TV`} />
                </svg>
                </li>
                <li>
                <svg>
                    <use  xlinkHref={`${sprite}#icon-WC`} />
                </svg>
                </li>
          </ul>
            <div >
                <div>
                    <p>Vehicle type</p>
                    <ul>
                        <li>
                            <svg>
                                <use  xlinkHref={`${sprite}#icon-VAN`} />
                            </svg>
                        </li>
                        <li>
                           <svg>
                                <use  xlinkHref={`${sprite}#icon-Fully`} />
                           </svg>
                        </li>
                        <li>
                            <svg>
                                 <use  xlinkHref={`${sprite}#icon-Alcove`} />
                            </svg>
                        </li>
                    </ul>
                </div>

        </div>
        </div>
    )
};

export default IconSearchBar;

