import React from "react";
import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import Texts from "./texts";
const Hero = () => {
  const isLg = useMediaQuery("(min-width:960px)");

  return (
    <Paper
      sx={{
        borderRadius: "20px",
        px: { lg: 6  , xs:3},
        pt: { lg: 14 , xs:3 },
        position: "relative",
        minHeight: { lg: "730px" },
        overflow: "hidden",
        height: {lg:"90vh" , xs:"60vh"},
      }}
    >
      {isLg && (
        <>
          {" "}
          <Box sx={{ position: "absolute", top: 0, right: 0 }}>
            <img src="/images/wave.svg" alt="" />
          </Box>
          <Box
            sx={{
              bgcolor: "background.default",
              p: 2,
              display: "flex",
              gap: 3,
              position: "absolute",
              top: "77vh",
              right: "300px",
            }}
          >
            <img src="/images/tron.svg" alt="" />
            <Box>
              <Box sx={{ display: "flex ", gap: 1, alignItems: "center" }}>
                <Typography variant="body2">Ethereum</Typography>
                <Typography variant="subtitle1">ETH</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex ",
                  gap: 1,
                  alignItems: "center",
                  mt: "10px",
                }}
              >
                {" "}
                <Box
                  sx={{
                    borderRadius: "50px",
                    py: "5px",
                    px: "10px",
                    textAlign: "center",
                    bgcolor: "background.paper",
                  }}
                >
                  TP5
                </Box>
                <Typography variant="body2">1,292</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "background.default",
              p: 2,
              display: "flex",
              gap: 3,
              position: "absolute",
              top: "45%",
              right: "420px",
            }}
          >
            <img src="/images/bitcoin.svg" alt="" />
            <Box>
              <Box sx={{ display: "flex ", gap: 1, alignItems: "center" }}>
                <Typography variant="body2">Bitcoin</Typography>
                <Typography variant="subtitle1">BTC</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex ",
                  gap: 1,
                  alignItems: "center",
                  mt: "10px",
                }}
              >
                {" "}
                <Box
                  sx={{
                    borderRadius: "50px",
                    py: "5px",
                    px: "10px",
                    textAlign: "center",
                    bgcolor: "background.paper",
                  }}
                >
                  TP1
                </Box>
                <Typography variant="body2">1,292</Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}

      <Texts />
    </Paper>
  );
};

export default Hero;
