import { Helmet } from "react-helmet-async";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import css from "./Home.module.css";


const Home = () => {

  return (
    <div className={css.homeContainer}>
      <Helmet>
        <title>Home</title>
      </Helmet> 
      <HomeVideo />
    </div>
  )
}

export default Home;

