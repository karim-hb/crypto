import { Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  const [open, setOpen] = useState<any>({});
  return (
    <>
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
          <Link  to="/dashboard">
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
          <Link  to="/dashboard/wall">
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
                    transform: !open.wallet ? "rotate(0)" : "rotate(180deg)",
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
                    <Typography variant="subtitle1">transactions</Typography>
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
        </Box>
        <Box sx={itemStyle}>
          <img src="/images/helpCenter.svg" alt="" />
          <Typography variant="subtitle1">Help Center</Typography>
        </Box>
      </Box>
    </>
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
