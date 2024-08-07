import { ColorRing } from 'react-loader-spinner';
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="colorRing">
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={[' #475467', '#F7F7F7', '#475467', '#F7F7F7', '#475467']}
      />
      </div>
    </div>
  )
}

export default Loader