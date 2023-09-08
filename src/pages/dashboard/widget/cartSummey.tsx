import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartSummery = ({ type }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        px: 3,
        py:"30px",
        bgcolor: "background.default",
        borderRadius: "2px",
        gap: 2,
      }}
    >
      <img src={type ? "/images/bw.svg" : "/images/ow.svg"} alt="" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography variant="subtitle2">Card Title</Typography>
          <Typography variant="caption">Subtitle here</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "42px !important" }} variant="h2">
            17.321
          </Typography>
          <Box sx={{ display: "flex", alignItems: "end", mb: 1 }}>
            <img src="/images/greenArrow.svg" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartSummery;
