import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Items from "./items";
const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
    >
      {" "}
   
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mr: 3,
          pr: 3,
          borderRight: "1px solid #4E4C4E",
        }}
      >
        {MENU.map((item, index) => (
          <Fragment key={"menu - " + index}>
            <Items item={item} />
          </Fragment>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <img width={20} src="/images/user.svg" alt="user_icon" />
        <Link to="/sing-up">
          <Typography variant="body2">Login / Register</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Nav;
const MENU = [
  {
    title: "Home",
    path: "/",
    child: [],
  },
  {
    title: "FAQ",
    path: "/faq",
    child: [],
  },
  {
    title: "Learn",
    path: "/",
    child: [
      {
        title: "How to start",
        path: "/how-to-start",
      },
      {
        title: "How to use signals",
        path: "/how-to-use-signals",
      },
      {
        title: "Our trade Strategy",
        path: "/trade-strategy",
      },
      {
        title: "How to use my referral code",
        path: "/how-to-use-my-referral-code",
      },
    ],
  },
  {
    title: "Blog",
    path: "/blog",
    child: [],
  },
  {
    title: "More",
    path: "/",
    child: [
      {
        title: "About Us",
        path: "/about",
      },
      {
        title: "Contact Us",
        path: "/contact",
      },
      {
        title: "Help Center",
        path: "/help",
      },
    ],
  },
];
