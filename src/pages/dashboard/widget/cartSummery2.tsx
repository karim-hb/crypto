import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartSummery2 = ({ type }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: {md:3 , xs:2},
        bgcolor: "background.default",
        borderRadius: "2px",
        gap: 2,
        justifyContent:"space-between"
      }}
    >
   
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography variant="subtitle2">Card Title</Typography>
          <Typography variant="caption">Subtitle here</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "42px !important" }} variant="h2">
            17.321
          </Typography>
        
        </Box>
      </Box>
      <img src={type ? "/images/cs1.svg" : "/images/cs2.svg"} alt="" />
    </Box>
  );
};

export default CartSummery2;
