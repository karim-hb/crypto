import { Box, Container, Paper, Typography } from "@mui/material";

const Strategy = () => {
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
          <Typography variant="h3">Our trade strategy </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              In GETRICHEX, you will receive at least one signal daily and
              sometimes more than one signal. So you must have capital for the
              second and third and … transactions. Also, according to the rules
              of capital management and risk management, you must enter the
              transaction with a part of your capital.
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
              The three strategies you should know in trading are:
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Entry
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Profit saving
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Placing stop loss point
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              In the first part, our suggestion is to enter the first signal
              with 25% of your capital and in the same way in the second and
              third and… signals.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              In the second part, our suggestion is this:
            </Typography>
          </Box>{" "}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="body1">
            If the signal was a single target, when you reach the target, withdraw your entire capital from the trade.
But if the signal is multi-target, proceed as follows:
            </Typography>
            <Typography
              sx={{ lineHeight: "30px" }}
              variant="body2"
            >In the third part, we use from “trailing stop method”. In this method, the stop loss point changes depending on the target point. In this way, the stop loss point is always two steps before the target point that is touched. For example, if the second target is touched, the stop loss point will move to the entry point. See the table below for more details:
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Strategy;
