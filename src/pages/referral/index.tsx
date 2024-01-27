import { Box, Container, Paper, Typography } from "@mui/material";

const Referall = () => {
  return (
    <Paper component={"article"} sx={{ minHeight: "calc(100vh - 180px)",py:{md:"14px"}}}>
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
          <Typography variant="h3">How to use referral code</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              One of the most attractive parts of GETRICHEX is the possibility
              of receiving referral bonuses. By registering in GETRICHEX, you
              will be given a unique referral code that you can use it as many
              as you want.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              If someone use your referral code during registration, you will
              receive 20% of that person’s registration package as a bonus. The
              important thing is that you get 20% not only from his/her initial
              registration but also from each renewal of his/her package.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              A few important points:
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -Your referral bonuses are displayed instantly on your panel and
              can be withdrawn weekly
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -You will benefit from these bonuses as long as you have an active
              package. So if your user account as disabled, you must renew your
              subscription first
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -You can withdraw your commission only once a week
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -To withdraw, your wallet balance must be at least 40USDT, then
              you can withdraw by entering your wallet address (USDT Trc20)
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Make profit and GET RICH!
            </Typography>
          </Box>{" "}
        </Box>
      </Container>
    </Paper>
  );
};

export default Referall;
