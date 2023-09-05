import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ pt: 2 }} component={"header"}>
      <Box sx={{ maxWidth: "1370px", mx: "auto", px: "10px"  , mb:1}}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:{md: "1fr 1fr 1fr" , xs:"1fr 1fr"},
            px:{md:"30px"}
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap:1,
              alignItems:"center"
            }}
          >
            <img width={20} src="/images/user.svg" alt="user_icon" />
            <Typography variant="body2">Login / Register</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: {md:2 , xs:"12px"},
              justifyContent: "center",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <img src="/images/logo.svg" alt="user_icon" />
            <Typography sx={{ maxWidth:{md: "60px" }}} variant="caption">
              It’s all about the future
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
