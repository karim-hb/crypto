import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box component={"footer"} sx={{ pt: 2, pb: 6 }}>
      <Container maxWidth={"xxl" as any}>
        {" "}
        <Box
          sx={{
            display: { lg: "none", xs: "flex" },
            justifyContent: "center",
            gap: 1,
            mb:4
          }}
        >
          {ALLLINKS.map((item, index) => (
            <Link to={item.path} key={index}>
              <Typography
                variant="caption"
                sx={{
                  color: "#ccc",
                  transition: "all 300ms",
                  ":hover": {
                    color: "#fff",
                  },
                }}
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </Box>
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
              <img
                src="/images/GetRichex Logo Site PSD.png"
                style={{ width: "160px" }}
                alt="user_icon"
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { lg: "grid", xs: "none" },
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            {ALLLINKS.map((item, index) => (
              <Link to={item.path} key={index}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#ccc",
                    transition: "all 300ms",
                    ":hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <IconButton target={"_blank"} href=" https://t.me/getrichex/" >
              <img src="/images/telegram.svg" alt="telegram" />
            </IconButton>{" "}
            <IconButton target={"_blank"} href=" https://twitter.com/getrichex/">
              {" "}
              <img src="/images/twitter.svg" alt="twitter" />{" "}
            </IconButton>{" "}
            <IconButton target={"_blank"} href="https://www.instagram.com/getrichex/">
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
const ALLLINKS = [
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Help Center",
    path: "/help",
  },
  {
    title: "Privacy Policy",
    path: "privacy_policy",
  },
  {
    title: "Terms & Conditins",
    path: "",
  },
];
