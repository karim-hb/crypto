import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component={"footer"} sx={{ pt: 2, pb: 6 }}>
      <Container maxWidth={"xl"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Link to="/">
              <img src="/images/logo.svg" alt="user_icon" />
            </Link>

            <Typography sx={{ maxWidth: { md: "60px" } }} variant="caption">
              It’s all about the future
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <IconButton>
              <img src="/images/telegram.svg" alt="telegram" />
            </IconButton>{" "}
            <IconButton>
              {" "}
              <img src="/images/twitter.svg" alt="twitter" />{" "}
            </IconButton>{" "}
            <IconButton>
              {" "}
              <img src="/images/instagram.svg" alt="instagram" />{" "}
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
