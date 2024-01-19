import CloseIcon from "@mui/icons-material/Close";
import { Box, Collapse, Typography, useMediaQuery } from "@mui/material";
import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const MobileNav = ({ setOpenD }: any) => {
  const location = useLocation();
  const [open, setOpen] = useState<any>({});
  const isMd = useMediaQuery("(min-width:960px)");

  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        /*      paddingInline: "10px", */
        justifyContent: "space-between",
        bgcolor: "background.default",
        pt: "50px",
      }}
    >
      {/*   <Box
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
      </Box> */}
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
      {location.pathname?.split("/")[1] === "dashboard" ? (
        <>
          {" "}
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
        </>
      ) : (
        <Box sx={{ paddingInline: "10px", mt: 2 }}>
          {MENU.map((item, index) => (
            <Fragment key={index}>
              {item.child.length === 0 ? (
                <>
                  {" "}
                  <Link onClickCapture={() => setOpenD(false)} to={item.path}>
                    <Box
                      sx={styles}
                      className={
                        location.pathname === item.path ? "activeD" : ""
                      }
                    >
                      <Box sx={itemStyle}>
                        -
                        <Typography variant="subtitle1">
                          {item.title}
                        </Typography>
                      </Box>
                    </Box>{" "}
                  </Link>
                </>
              ) : (
                <>
                  <Box
                    sx={styles}
                    /*          className={
                      location.pathname === "/dashboard/wallet" ? "activeD" : ""
                    } */
                    onClick={() => setOpen({ [item.title]: !open[item.title] })}
                  >
                    <Box sx={itemStyle}>
                      -<Typography variant="subtitle1">{item.title}</Typography>{" "}
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
                            transform: !open[item.title]
                              ? "rotate(0)"
                              : "rotate(180deg)",
                            transition: "300 all ease",
                          }}
                          src={"/images/arrowDown.svg"}
                          alt=""
                        />
                      </Box>
                    </Box>{" "}
                    <Collapse in={open[item.title]}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          mt: 2,
                          gap: 2,
                          pl: 4,
                        }}
                      >
                        {item.child.map((ch, index) => (
                          <Link key={ch.path} to={ch.path}>
                            <Box sx={itemStyle}>
                              <Typography variant="subtitle1">-</Typography>
                              <Typography variant="subtitle1">
                                {ch.title}
                              </Typography>
                            </Box>
                          </Link>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>
                </>
              )}
            </Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MobileNav;
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
  color:"#ccc"
};

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
