import { Box, Button, Container, Paper, Typography } from "@mui/material";
import VideoSwiper from "./videoSwiper";
const Work = () => {
  return (
    <Paper sx={{ py: 6, my: 3 }}>
      <Container sx={{ mt: 3 }} maxWidth="xl">
        {" "}
        <Box
          sx={{
            display: "flex ",
            alignItems: "center",
            gap: {md:20 , xs:4},
            flexWrap: { xs:"wrap" , lg:"nowrap"},
          }}
        >
          <Box sx={{minWidth:{md:"500px"}}}>
            <Typography variant="h2">
              How CryptoWave <br /> Work?
            </Typography>
            <Typography sx={{ mt: "2px" }} variant="subtitle1">
              Lorem Ipsum is simply dummy text .
            </Typography>{" "}
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button sx={{ display: "flex", gap: 1 }} variant="contained">
                <span>Get Started</span>

                <img src="/images/arrow.svg" alt="" />
              </Button>
              <Button
                sx={{ display: "flex", gap: 1 }}
                variant="outlined"
                color="inherit"
              >
                <span>Free Signals</span>

                <img src="/images/arrowW.svg" alt="" />
              </Button>
            </Box>
          </Box>
          <VideoSwiper />
        </Box>
      </Container>{" "}
    </Paper>
  );
};

export default Work;
