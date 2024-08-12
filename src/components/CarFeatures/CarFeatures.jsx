import Features from "../Features/Features";
import FormBook from "../FormBook/FormBook";

import css from "./CarFeatures.module.css";

const CarFeatures = ({ data }) => {

    return (
        <div className={css.containerFeature}>
            <Features db={data} />
            <FormBook/>
        </div>
    )
};

export default CarFeatures;
