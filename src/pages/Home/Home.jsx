import { Helmet } from "react-helmet-async";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import Container from "../../components/Container/Container";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
          <HomeVideo />
      </Container>
    </>
  )
}

export default Home;

