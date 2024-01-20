import { Box, Button, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import WallCart from "./wallCart";
import GridOnIcon from "@mui/icons-material/GridOn";
import SwipeableViews from "react-swipeable-views";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WallCart2 from "./wallCart2";
import { useLocation } from "react-router-dom";
const Wall = () => {
  const [value, setValue] = useState<number>(0);
  const location = useLocation();
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const isMd = useMediaQuery("(min-width:960px)");

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "space-between" },
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h2">SIGNAL</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            sx={{ display: "flex", gap: 1 }}
            variant="outlined"
            color="inherit"
          >
            <span>Filter</span>

            <img src="/images/arrowW.svg" alt="" />
          </Button>
          <Button
            sx={{ display: "flex", gap: 1 }}
            variant="outlined"
            color="inherit"
          >
            <span>Sort By</span>

            <img src="/images/arrowW.svg" alt="" />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",

          mb: 2,
        }}
      >
        <IconButton>
          <GridOnIcon onClick={() => setValue(0)} sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton>
          <FormatListBulletedIcon
            onClick={() => setValue(1)}
            sx={{ color: "#fff" }}
          />
        </IconButton>
      </Box>
      <SwipeableViews
        axis={"x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: { sm: "grid", xs: "flex" },
              gridTemplateColumns: {
                lg: "1fr 1fr 1fr 1fr",
                md: "1fr 1fr 1fr",
                sm: "1fr 1fr",
                xs: "1fr",
              },
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <WallCart buy status={1} />
            <WallCart buy status={1} />
            <WallCart buy status={1} />
            <WallCart buy status={1} />
            <WallCart buy status={2} />
            <WallCart buy status={2} />
            <WallCart buy status={2} />
            <WallCart buy status={2} />
            <WallCart buy={false} status={3} />
            <WallCart buy={false} status={3} />
            <WallCart buy={false} status={3} />
            <WallCart buy={false} status={3} />
            <WallCart buy={false} status={4} />
            <WallCart buy={false} status={4} />
            <WallCart buy={false} status={4} />
            <WallCart buy={false} status={4} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <WallCart2 buy status={1} />
            <WallCart2 buy status={1} />
            <WallCart2 buy status={1} />
            <WallCart2 buy status={1} />
            <WallCart2 buy status={2} />
            <WallCart2 buy status={2} />
            <WallCart2 buy status={2} />
            <WallCart2 buy status={2} />
            <WallCart2 buy={false} status={3} />
            <WallCart2 buy={false} status={3} />
            <WallCart2 buy={false} status={3} />
            <WallCart2 buy={false} status={3} />
            <WallCart2 buy={false} status={4} />
            <WallCart2 buy={false} status={4} />
            <WallCart2 buy={false} status={4} />
            <WallCart2 buy={false} status={4} />
          </Box>
        </TabPanel>
      </SwipeableViews>
      {location.pathname === "/dashboard/wall" && !isMd ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: 2,
              py: 3,
              bgcolor: "background.default",
              gap: 1,
              width: "100%",
              my: 6,
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
        <></>
      )}
    </Container>
  );
};

export default Wall;
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <>{children}</>
        </>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
