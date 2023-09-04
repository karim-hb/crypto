import { Container } from "@mui/material";
import AllDigits from "./allDigits";
import Blogs from "./blog";
import Hero from "./hero";
import WhoWeAre from "./whoWeAre";
import Work from "./work";

const Home = () => {
  return (
    <>
      {" "}
      <Container sx={{ mt: 3 }} maxWidth="xl">
        <Hero />
      </Container>
      <AllDigits />
      <WhoWeAre />
      <Work />
      <Blogs />
    </>
  );
};

export default Home;
