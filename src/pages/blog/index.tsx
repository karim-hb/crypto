import {
  Box,
  Collapse,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Cart1 from "./cart1";
import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Cart2 from "./cart2";

const Blogs = () => {
  const [value, setValue] = useState<number>(0);
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <Paper
      component={"article"}
      sx={{ minHeight: "calc(100vh - 190px)" }}
    >
      <Container
        maxWidth={"xxl" as any}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 3,
          py: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #474747",
            mb: 1,
            pb: 1,
          }}
        >
          {" "}
          <Typography className="custome_h1" variant="h1">Blogs </Typography>{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <IconButton>
              <FormatListBulletedIcon
                onClick={() => setValue(0)}
                sx={{ color: "#fff" }}
              />
            </IconButton>{" "}
            <IconButton>
              <GridOnIcon onClick={() => setValue(1)} sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Box>

        <Box>
          <SwipeableViews
            axis={"x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {BLOGSDATA?.map((item, index) => (
                  <Fragment key={"1-" + index}>
                    <Cart1 item={item} />
                  </Fragment>
                ))}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {" "}
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
              >    {BLOGSDATA?.map((item, index) => (
                <Fragment key={"2-" + index}>
                  <Cart2 item={item} />
                </Fragment>
              ))}</Box>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Container>
    </Paper>
  );
};

export default Blogs;
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
const BLOGSDATA = [
  {
    img: "/images/c1e21aebb911078d6eb3e1213c6ee598.jpg",
    title:
      "Analysts Eye Positive Year for Ethereum as Dencun Goes Live on Testnet",
    descriptions:
      "Bitcoin miners, once in accumulation mode, initiated an unprecedented sell-off over recent days, offloading...",
    date: "24 January, 2024",
  },
  {
    img: "/images/original-b4acd7e685816d992452c02fa35c1b56.jpg",
    title:
      "Bitcoin Succumbs to Sell the News Pressure as Spot ETFs Are Launched",
    descriptions:
      "Bitcoin faced a formidable “sell the news” phenomenon last week as the SEC, finally, granted...",
    date: "25 January, 2024",
  },
  {
    img: "/images/original-0415e302b5fe1a1454c620662ce171e2.png",
    title:
      "Bitcoin 2024 Price Prediction: What Will Happen Next Bitcoin Halving?",
    descriptions:
      "With the next Bitcoin halving scheduled to occur on April 22, 2024, and investors encouraged by the recent...",
    date: "26 January, 2024",
  },
];
