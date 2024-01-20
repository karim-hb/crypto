import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartSummery2 = ({ type , title  , upcrease}: any) => {
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
          <Typography variant="subtitle2">{title} </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "26px !important" , display:"inline-block",color: upcrease ? "#4CAF50" : "#E53935" }} variant="h2">
            {
              upcrease ? <>+% 17.321</> : <>-% 7.57</>
            }
         
          </Typography>
        
        </Box>
      </Box>
      <img src={type ? "/images/cs1.svg" : "/images/cs2.svg"} alt="" />
    </Box>
  );
};

export default CartSummery2;
