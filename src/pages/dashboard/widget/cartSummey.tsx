import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartSummery = ({ type , title }: any) => {
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
          <Typography variant="subtitle2">{title}</Typography>
        {/*   <Typography variant="caption">Subtitle here</Typography> */}
        </Box>
        <Box sx={{ display: "flex" , alignItems:"end" ,gap:'3px'}}>
          <Typography sx={{ fontSize: "42px !important" , mb:"-7px"}} variant="h2">
            17.321
          </Typography>
          <Typography sx={{ fontSize: "18px !important" }} variant="h2">
            USDT
          </Typography>
          <Box sx={{ display: "flex", alignItems: "end", mb: '3px' }}>
            <img src="/images/greenArrow.svg" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartSummery;
