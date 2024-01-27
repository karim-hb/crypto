import { Box, Container, Paper, Typography } from "@mui/material";

const Signal = () => {
  return (
    <Paper component={"article"} sx={{ minHeight: "calc(100vh - 190px)"  ,py:{md:"14px"}}}>
      <Container maxWidth={"xxl" as any}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: 6,
/*             mt: { md: 5 },
 */          }}
        >
          <Typography className="custome_h1" variant="h1">How to use signals</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Each signal contains the following information:
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              - Coin: the name of the proposed currency for the transaction
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              - T.F: it stands for “time frame”
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              {" "}
              If you come across with the phrase “scalp” in the signal’s “T.F”,
              it means you should immediately enter the transaction and that
              signal will expire very soon.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              {" "}
              If you come across with the phrase “pending order” in the signal’s
              “T.F”, it means we have not yet entered the buying or selling
              range but we will enter this range soon and you must open an order
              at the suggested point or points.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -E.P: it stands for “enter price”
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              {" "}
              “E.P” is the point where you should open your order. “E.P” is
              sometimes a price and sometimes a price range. If you come across
              a price range in the signal’s “E.P”, according to your own trade
              strategy or “our trade strategy” (***LINK***), enter part of the
              capital in the first point and part in the second point.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -T.P: it stands for “target price”
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              {" "}
              “T.P” can be 1 to 6 steps, and by reaching each “T.P” you must
              withdraw part of your capital
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              according to your own trade strategy or “our trade strategy”
              (***LINK***)
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              -S.L: it stands for “stop loss”
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              {" "}
              If, by chance, the market trend goes against our will, the price
              may reach “S.L”, in which case you should immediately withdraw all
              your capital from that transaction.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Now, just order the provided signal using the above information.
            </Typography>
            <Typography sx={{ lineHeight: "30px" }} variant="body2">
              Make profit and GET RICH!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Signal;
