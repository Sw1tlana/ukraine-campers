import Feature from "../../components/Features/Features";

const CarFeatures = ({data}) => {
    return (
        <div>
            <Feature db={data} />
        </div>
    )
};

export default CarFeatures;
