import {
  Box,
  Collapse,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const isMd = useMediaQuery("(min-width:756px)");
  const [openD, setOpenD] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState<any>({});
  return (
    <Box sx={{ pt: 2 }} component={"header"}>
      <Box sx={{ maxWidth: "1370px", mx: "auto", px: "10px", mb: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" },
            px: { md: "30px" },
          }}
        >
          {isMd && (
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
          )}

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
                style={{ maxWidth: isMd ? "auto" : "119px" }}
                src="/images/logo.svg"
                alt="user_icon"
              />
            </Link>

            <Typography sx={{ maxWidth: { md: "60px" } }} variant="caption">
              It’s all about the future
            </Typography>
          </Box>
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
        <Box
          sx={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            /*      paddingInline: "10px", */
            justifyContent: "space-between",
            bgcolor: "background.default",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.default",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: "10px",
              py: 3,
              borderBottom: "5px solid #1C1B1F !important",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { md: 2, xs: "12px" },
                flexDirection: "column",
              }}
            >
              <Link onClickCapture={() => setOpenD(false)} to="/">
                <img
                  style={{ maxWidth: isMd ? "auto" : "119px" }}
                  src="/images/logo.svg"
                  alt="user_icon"
                />
              </Link>
              <Typography sx={{ maxWidth: { md: "60px" } }} variant="caption">
                It’s all about the future
              </Typography>
            </Box>

            <CloseIcon onClick={() => setOpenD(false)} />
          </Box>
          <Link onClickCapture={() => setOpenD(false)} to="/sing-up">
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                mt: 3,
                pb: 3,
                paddingInline: "10px",
                borderBottom: "5px solid #1C1B1F !important",
              }}
            >
              <img width={20} src="/images/user.svg" alt="user_icon" />
              <Typography variant="body2">Login / Register</Typography>
            </Box>{" "}
          </Link>
          <Box sx={{ paddingInline: "10px", mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.default",
                paddingInline: "10px",
                borderRadius: "5px",
                py: 3,
              }}
            >
              <Link onClickCapture={() => setOpenD(false)} to="/dashboard">
                <Box
                  sx={styles}
                  className={
                    location.pathname === "/dashboard" ? "activeD" : ""
                  }
                >
                  <Box sx={itemStyle}>
                    {" "}
                    <img src="/images/dashboard.svg" alt="" />
                    <Typography variant="subtitle1">Dashboard</Typography>
                  </Box>
                </Box>
              </Link>
              <Link onClickCapture={() => setOpenD(false)} to="/dashboard/wall">
                <Box
                  sx={styles}
                  className={
                    location.pathname === "/dashboard/wall" ? "activeD" : ""
                  }
                >
                  <Box sx={itemStyle}>
                    {" "}
                    <img src="/images/wall.svg" alt="" />
                    <Typography variant="subtitle1">Wall</Typography>
                  </Box>
                </Box>{" "}
              </Link>

              <Box
                sx={styles}
                className={
                  location.pathname === "/dashboard/wallet" ? "activeD" : ""
                }
                onClick={() => setOpen({ wallet: !open.wallet })}
              >
                <Box sx={itemStyle}>
                  {" "}
                  <img src="/images/wallet.svg" alt="" />
                  <Typography variant="subtitle1">Wallet</Typography>{" "}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "2px",
                      /* transform: "translateY(-70%)", */
                      right: "5px",
                    }}
                  >
                    <img
                      style={{
                        transform: !open.wallet
                          ? "rotate(0)"
                          : "rotate(180deg)",
                        transition: "300 all ease",
                      }}
                      src={"/images/arrowDown.svg"}
                      alt=""
                    />
                  </Box>
                </Box>{" "}
                <Collapse in={open.wallet}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: 2,
                      gap: 2,
                      pl: 4,
                    }}
                  >
                    <Link to="/dashboard/wallet/transaction">
                      <Box sx={itemStyle}>
                        <Typography variant="subtitle1">-</Typography>
                        <Typography variant="subtitle1">
                          transactions
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </Collapse>
              </Box>
              <Box
                sx={styles}
                className={
                  location.pathname === "/dashboard/profile" ? "activeD" : ""
                }
                onClick={() => setOpen({ profile: !open.profile })}
              >
                <Box sx={itemStyle}>
                  {" "}
                  <img src="/images/userProfile.svg" alt="" />
                  <Typography variant="subtitle1">User Profile</Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "2px",
                      /*   transform: "translateY(-70%)", */
                      right: "5px",
                    }}
                  >
                    <img
                      style={{
                        transform: !open.profile
                          ? "rotate(0)"
                          : "rotate(180deg)",
                        transition: "300 all ease",
                      }}
                      src={"/images/arrowDown.svg"}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default Header;
const itemStyle = {
  display: "flex",
  alignItems: "center",
  gap: 2,

  position: "relative",
  cursor: "pointer",
  ":hover": {
    h6: {
      color: "#fff !important",
    },
    img: {
      filter: "brightness(5.5) !important",
    },
  },
  h6: {
    transition: "all 300ms ease",
  },
  img: {
    transition: "all 300ms ease",
  },
};
const styles = {
  borderBottom: "1px solid #313033",
  mb: 1,
  pb: 2,
  pt: 1,
  display: "flex",
  flexDirection: "column",
};
