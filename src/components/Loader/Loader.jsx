import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
        <div className={css.loader}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#475467', '#F7F7F7', '#475467', '#F7F7F7', '#475467']}
  />
        </div>
  )
}

export default Loader