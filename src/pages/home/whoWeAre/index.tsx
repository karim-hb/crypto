import { Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Carts from "./cart";

const WhoWeAre = () => {
  return (
    <Paper sx={{py:2 , mt:3}}>
      <Container sx={{ mt: {xs:3 , md:"100px"} , mb: "90px"}} maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap:"10px",
            flexWrap:"wrap"
          }}
        >
          <Box>
            <Typography variant="h2">  how getrichx works</Typography>
        {/*     <Typography sx={{mt:"2px"}} variant="subtitle1">
              Lorem Ipsum is simply dummy text .
            </Typography> */}
          </Box>
         
        </Box>
        <Carts/>
      </Container>
    </Paper>
  );
};

export default WhoWeAre;
