import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import WallCart from "./wallCart";
import GridOnIcon from "@mui/icons-material/GridOn";
import SwipeableViews from "react-swipeable-views";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WallCart2 from "./wallCart2";
const Wall = () => {
  const [value, setValue] = useState<number>(0);

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "space-between" },
          alignItems: "center",
          mb: 2,
          flexWrap:"wrap",
          gap:2
        }}
      >
        <Typography variant="h2">Wall</Typography>
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
              display:{sm: "grid" , xs:"flex"},
              gridTemplateColumns: {
                lg: "1fr 1fr 1fr 1fr",
                md: "1fr 1fr 1fr",
                sm: "1fr 1fr",
                xs: "1fr",
              },
              flexDirection:"column",
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
