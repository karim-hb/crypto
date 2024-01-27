import { Box, Container, Paper, Typography } from "@mui/material";
import Details from "./details";
import Line from "./line";
import Point from "./point";

const Start = () => {
  return (
    <Paper component={"article"} sx={{ minHeight: "calc(100vh - 190px)" ,py:{md:"14px"}}}>
      <Container maxWidth={"xxl" as any}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: 1,
            mt: { md: 5 },
          }}
        >
          <Typography variant="h3">How To Start?</Typography>
          <Box sx={{ position: "relative", minHeight: "800px" }}>
            <Line />
            <Point index={0} />
            <Details
              index={0}
              text="Enter the Register section and create an account for yourself
"
            />
            <Point index={1} />
            <Details
              index={1}
              text="If you have a referral code, enter it and then complete the sign up
"
            />
            <Point index={2} />
            <Details
              index={2}
              text="            Enter your user panel and choose the package you want
"
            />
            <Point index={3} />
            <Details
              index={3}
              text="Buy USDT Trc20 according to the amount of your chosen package and the cost of its transfer (2 usdt)
"
            />
            <Point index={4} />
            <Details
              index={4}
              text="Transfer your package amount to the wallet displayed for you and put the transaction hash(Txid) in the intended box.
"
            />
            <Point index={5} />
            <Details
              index={5}
              text="Use the signals provided by GETRICHEX on any exchange your want (we recommend Coinex).
"
            />
            <Point index={6} />
            <Details
              index={6}
              text="To guarantee your profitability, please use all signals provided by GETRICHEX.
"
            />
            <Point index={7} />
            <Details
              index={7}
              text="Make profit and GET RICH!
"
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Start;
