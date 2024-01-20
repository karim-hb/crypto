import { Box, Container, Paper, Typography } from "@mui/material";

const Faq = () => {
  return (
    <Box component={"article"} sx={{ minHeight: "calc(100vh - 250px)" }}>
      <Container maxWidth={"xxl" as any}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: 2,
            mt: { md: 5 },
          }}
        >
          <Typography variant="h1">FAQ </Typography>
          <Typography variant="h3">Frequently Asked Questions</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              1.What information should I provide to register?
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Just enter your email address and choose your desired username and
              password.
              <br />
              (If you have been introduced by someone else, enter his/her
              referral code as well)
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              2. How much should I pay to register?
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Initial registration on GETRICHEX is completely free, but to use
              the signals, you must choose one of the following packages based
              on your needs:
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              100 USDT ....... 1 Month
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              285 USDT ...... 3 Month (%5 off)
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              550 USDT ...... 6 Month (%8 off)
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              1000 USDT ...... 1 Year (%16 off)
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              3. What is the guarantee of my profitability on GETRICHEX?
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Our trading team members have been trained for months and passed
              numerous skill tests. So that they can provide you with unique
              trading signals. In addition, to ensure that you receive
              successful signals, all signals offered by the trade team members
              go through 3 layers of review and you will receive at least one
              definite signal daily.
              <br />
              In order to be sure that you will make a significant profit, you
              must use all our daily signals so that your average profitability
              is always positive.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Faq;
