import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Carts = ({ type }: any) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
        }}
      >
        {" "}
        <img src={"/images/ow.svg"} alt="" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant="subtitle2">Withdrawable Bouns</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ fontSize: "25px !important", ml: 2 }}
              variant="h3"
            >
              80 USDT
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          borderTop: "1px solid #fff",
          mt: 2,
          pt: 2,
        }}
      >
        {" "}
        <img src={"/images/bw.svg"} alt="" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant="subtitle2">Total Referral Bonus</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ fontSize: "25px !important", ml: 2 }}
              variant="h3"
            >
              480 USDT
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Carts;
