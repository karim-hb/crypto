import { Collapse, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const [open, setOpen] = useState<any>({});
  return (
    <div>
      <Box
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          paddingInline: "20px",
          justifyContent: "space-between",
          height: "calc(100vh - 140px)",
          position: "sticky",
          top: "30px",
          /*     top:"10px",
          left:0 */
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/dashboard">
            <Box
              sx={styles}
              className={location.pathname === "/dashboard" ? "activeD" : ""}
            >
              <Box sx={itemStyle}>
                {" "}
                <img src="/images/dashboard.svg" alt="" />
                <Typography variant="subtitle1">Dashboard</Typography>
              </Box>
            </Box>
          </Link>
          <Link to="/dashboard/wall">
            <Box
              sx={styles}
              className={
                location.pathname === "/dashboard/wall" ? "activeD" : ""
              }
            >
              <Box sx={itemStyle}>
                {" "}
                <img src="/images/wall.svg" alt="" />
                <Typography variant="subtitle1">Signal</Typography>
              </Box>
            </Box>{" "}
          </Link>

          <Box
            sx={styles}
         
          >
            <Box
              onClick={() => setOpen({ wallet: !open.wallet })}
              sx={itemStyle}
              className={
                location.pathname === "/dashboard/withraw" || location.pathname === "/dashboard/transactions"  ? "activeD" : ""
              }
            >
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
                    transform: !open.wallet ? "rotate(0)" : "rotate(180deg)",
                    transition: "300 all ease",
                  }}
                  src={"/images/arrowDown.svg"}
                  alt=""
                />
              </Box>
            </Box>{" "}
            <Collapse in={open.wallet || location.pathname === "/dashboard/withraw" || location.pathname === "/dashboard/transactions" }>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 2,
                  gap: 2,
                  pl: 4,
                }}
              >
                <Link to="/dashboard/transactions">
                  <Box
                    className={
                      location.pathname === "/dashboard/transactions" ? "activeD" : ""
                    }
                    sx={itemStyle}
                  >
                    <Typography variant="subtitle1">-</Typography>
                    <Typography variant="subtitle1">Transactions</Typography>
                  </Box>
                </Link>{" "}
                <Link to="/dashboard/withraw">
                  <Box
                    className={
                      location.pathname === "/dashboard/withraw" ? "activeD" : ""
                    }
                    sx={itemStyle}
                  >
                    <Typography variant="subtitle1">-</Typography>
                    <Typography variant="subtitle1">Withraw</Typography>
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
                    transform: !open.profile ? "rotate(0)" : "rotate(180deg)",
                    transition: "300 all ease",
                  }}
                  src={"/images/arrowDown.svg"}
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>{" "}
        {/* <Box sx={itemStyle}>
            <img src="/images/helpCenter.svg" alt="" />
            <Typography variant="subtitle1">Help Center</Typography>
          </Box> */}
        {/*   {location.pathname === "/dashboard/wall" ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                px: 2,
                py: 3,
                bgcolor: "background.default",
                gap: 1,
                width: "240px",
                mb:6
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "35px  !important" }} variant="h2">
                  Chart
                </Typography>
                <IconButton>
                  <img src="/images/note.svg" alt="" />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #1C1B1F",
                  my: 1,
                  pb: 1,
                }}
              >
                <Box sx={{ display: "flex ", gap: 1, alignItems: "top" }}>
                  <img
                    width={24}
                    style={{ marginTop: "-15px" }}
                    src="/images/bitcoinS.svg"
                    alt=""
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2">Bitcoin</Typography>
                    <Typography variant="body2">22,922</Typography>
                  </Box>

                  <Typography
                    sx={{ fontSize: "13px !important" }}
                    variant="subtitle1"
                  >
                    BTC
                  </Typography>
                </Box>
                <img src="/images/down.svg" width={49} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #1C1B1F",
                  my: 1,
                  pb: 1,
                }}
              >
                <Box sx={{ display: "flex ", gap: 1, alignItems: "top" }}>
                  <img
                    width={24}
                    style={{ marginTop: "-15px" }}
                    src="/images/etherS.svg"
                    alt=""
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2">Ethereum</Typography>
                    <Typography variant="body2">22,922</Typography>
                  </Box>

                  <Typography
                    sx={{ fontSize: "13px !important" }}
                    variant="subtitle1"
                  >
                    ETH
                  </Typography>
                </Box>
                <img src="/images/up.svg" width={49} alt="" />
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #1C1B1F",
                  my: 1,
                  pb: 1,
                }}
              >
                <Box sx={{ display: "flex ", gap: 1, alignItems: "top" }}>
                  <img
                    width={24}
                    style={{ marginTop: "-15px" }}
                    src="/images/tron.svg"
                    alt=""
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2">Tron</Typography>
                    <Typography variant="body2">0.0679</Typography>
                  </Box>

                  <Typography
                    sx={{ fontSize: "13px !important" }}
                    variant="subtitle1"
                  >
                    TRX
                  </Typography>
                </Box>
                <img src="/images/up.svg" width={49} alt="" />
              </Box>    <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #1C1B1F",
                  my: 1,
                  pb: 1,
                }}
              >
                <Box sx={{ display: "flex ", gap: 1, alignItems: "top" }}>
                  <img
                    width={24}
                    style={{ marginTop: "-15px" }}
                    src="/images/bitcoinS.svg"
                    alt=""
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2">Bitcoin</Typography>
                    <Typography variant="body2">22,922</Typography>
                  </Box>

                  <Typography
                    sx={{ fontSize: "13px !important" }}
                    variant="subtitle1"
                  >
                    BTC
                  </Typography>
                </Box>
                <img src="/images/down.svg" width={49} alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #1C1B1F",
                  my: 1,
                  pb: 1,
                }}
              >
                <Box sx={{ display: "flex ", gap: 1, alignItems: "top" }}>
                  <img
                    width={24}
                    style={{ marginTop: "-15px" }}
                    src="/images/etherS.svg"
                    alt=""
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body2">Ethereum</Typography>
                    <Typography variant="body2">22,922</Typography>
                  </Box>

                  <Typography
                    sx={{ fontSize: "13px !important" }}
                    variant="subtitle1"
                  >
                    ETH
                  </Typography>
                </Box>
                <img src="/images/up.svg" width={49} alt="" />
              </Box>{" "}

            </Box>
          </>
        ) : (
          <Box sx={itemStyle}>
            <img src="/images/helpCenter.svg" alt="" />
            <Typography variant="subtitle1">Help Center</Typography>
          </Box>
        )} */}
      </Box>
    </div>
  );
};

export default Aside;
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
