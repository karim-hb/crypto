import MenuIcon from "@mui/icons-material/Menu";
import { Box, SwipeableDrawer, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./mobileNav";
import Nav from "./nav";

const Header = () => {
  const isMd = useMediaQuery("(min-width:960px)");
  const [openD, setOpenD] = useState(false);

  return (
    <Box
      sx={{
        pt: 2,
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 9999,
        background: "#000",
        width: "100%",
      }}
      component={"header"}
    >
      <Box sx={{ maxWidth: "1370px", mx: "auto", px: "10px", mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { md: "30px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { md: 2, xs: "12px" },
              justifyContent: { md: "center" },
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {!isMd && (
              <MenuIcon
                onClick={() => setOpenD(true)}
                sx={{ color: "#fff", ml: 1 }}
              />
            )}
            <Link to="/">
              <img
                style={{ maxWidth: isMd ? "auto" : "119px", maxHeight: "35px" }}
                src="/images/GetRichex Logo Site PSD.png"
                alt="user_icon"
              />
            </Link>
          </Box>{" "}
          {isMd && <Nav />}
        </Box>
      </Box>
      <SwipeableDrawer
        anchor={"left"}
        open={openD}
        onClose={() => setOpenD(false)}
        onOpen={() => setOpenD(true)}
        sx={{
          ".MuiPaper-root": {
            background: "#000 !important",
            borderRight: "5px solid #1C1B1F !important",
          },
        }}
      >
        <MobileNav setOpenD={setOpenD} />
      </SwipeableDrawer>
    </Box>
  );
};

export default Header;
