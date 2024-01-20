import { Box } from "@mui/material";
import AllDigits from "./allDigits";
import Blogs from "./blog";
import Hero from "./hero";
import WhoWeAre from "./whoWeAre";
import Work from "./work";

const Home = () => {
  return (
    <>
      {" "}
      <Box sx={{  mx: "auto", px:{md:"24px" , xs: "10px"} }}>
        <Hero />
      </Box>
      <WhoWeAre />
      <Work />
      <Blogs />
    </>
  );
};

export default Home;
