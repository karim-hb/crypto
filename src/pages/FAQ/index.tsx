import { Box, Collapse, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState({ 1: true, 2: false, 3: false });
  return (
    <Paper
      component={"article"}
      sx={{ minHeight: "calc(100vh - 190px)" }}
    >
        <Container
        maxWidth={'xxl' as any}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            px: 3,
            py: 1,
          }}
        >
          <Typography variant="h1">FAQ </Typography>
          <Typography variant="h3">Frequently Asked Questions</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 , background:"#414141" , p:2 , borderRadius:"2px" , maxWidth:"500px" , mt:2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                cursor: "pointer",
              }}
              onClick={() => setOpen({ ...open, 1: !open[1] })}
            >
              <Typography variant="body1">
                1.What information should I provide to register?
              </Typography>
              <img
                style={{
                  transform: !open[1] ? "rotate(0)" : "rotate(180deg)",
                  transition: "300 all ease",
                }}
                src={"/images/arrowDown.svg"}
                alt=""
              />
            </Box>
            <Collapse in={open[1]}>
              <Typography sx={{ lineHeight: "30px" }} variant="body2">
                Just enter your email address and choose your desired username
                and password.
                <br />
                (If you have been introduced by someone else, enter his/her
                referral code as well)
              </Typography>
            </Collapse>
          </Box>{" "}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 , background:"#414141" , p:2 , borderRadius:"2px" , maxWidth:"500px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                cursor: "pointer",
              }}
              onClick={() => setOpen({ ...open, 2: !open[2] })}
            >
              <Typography variant="body1">
                2. How much should I pay to register?
              </Typography>{" "}
              <img
                style={{
                  transform: !open[2] ? "rotate(0)" : "rotate(180deg)",
                  transition: "300 all ease",
                }}
                src={"/images/arrowDown.svg"}
                alt=""
              />
            </Box>
            <Collapse in={open[2]}>
              <>
                {" "}
                <Typography sx={{ lineHeight: "30px" }} variant="body2">
                  Initial registration on GETRICHEX is completely free, but to
                  use the signals, you must choose one of the following packages
                  based on your needs:
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
              </>
            </Collapse>
          </Box>{" "}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 , background:"#414141" , p:2 , borderRadius:"2px" , maxWidth:"500px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "600px",
                cursor: "pointer",
              }}
              onClick={() => setOpen({ ...open, 3: !open[3] })}
            >
              <Typography variant="body1">
                3. What is the guarantee of my profitability on GETRICHEX?
              </Typography>{" "}
              <img
                style={{
                  transform: !open[3] ? "rotate(0)" : "rotate(180deg)",
                  transition: "300 all ease",
                }}
                src={"/images/arrowDown.svg"}
                alt=""
              />
            </Box>
            <Collapse in={open[3]}>
              <>
                {" "}
                <Typography sx={{ lineHeight: "30px" }} variant="body2">
                  Our trading team members have been trained for months and
                  passed numerous skill tests. So that they can provide you with
                  unique trading signals. In addition, to ensure that you
                  receive successful signals, all signals offered by the trade
                  team members go through 3 layers of review and you will
                  receive at least one definite signal daily.
                  <br />
                  In order to be sure that you will make a significant profit,
                  you must use all our daily signals so that your average
                  profitability is always positive.
                </Typography>
              </>
            </Collapse>
          </Box>
        </Container>
  
    </Paper>
  );
};

export default Faq;
