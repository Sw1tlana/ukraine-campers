import { Helmet } from "react-helmet-async";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import { AppBar } from "@mui/material";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeVideo />
      <AppBar />
    </>
  )
}

export default Home;

