import { icons as sprite } from '../../shared/icons';

const IconSearchBar = () => {
    return (
        <div>
       <div>
        <h2>Location</h2>
        <div>
          <svg>
                <use  xlinkHref={`${sprite}#`} />
            </svg>
        <input  type="text" placeholder='City'/></div>
            </div>
            
                    <h2>Filters</h2>
        <div >

        </div>
        </div>
    )
};

export default IconSearchBar;

