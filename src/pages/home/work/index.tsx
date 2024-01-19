import { Box, Container, Paper, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
const Work = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isLg = useMediaQuery("(min-width:960px)");

  return (
    <Paper sx={{ py: 6, my: 3 }}>
      <Container sx={{ mt: 3 }} maxWidth="xl">
        {" "}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: 2,
            }}
          >
            {" "}
            <Typography variant="h2">Visual Learning</Typography>
          </Box>
          <Tabs value={value} onChange={handleChange} sx={tabStyles}>
            <Tab label="use signals" {...a11yProps(0)} />
            <Tab label="use my referralcode " {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel index={0} value={value}>
            <video style={{borderRadius:"10px"}} width={isLg ? "70%" : "100%"} height={isLg ? "500" : "100%"} controls>
              <source src="/videos/h_1920_3000k.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CustomTabPanel>{" "}
          <CustomTabPanel index={1} value={value}>
            <video style={{borderRadius:"10px"}} width={isLg ? "70%" : "100%"} height={isLg ? "500" : "100%"} controls>
              <source src="/videos/h_1920_3000k.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CustomTabPanel>
        </Box>
      </Container>{" "}
    </Paper>
  );
};

export default Work;
const tabStyles = {
  ".MuiTabs-fixed": {
    justifyContent: "center",
  },
  ".MuiTabs-flexContainer": {
    justifyContent: "center",
    background: "#000",
    maxWidth: "fit-content",
    marginInline: "auto",
    px: "3px",
    borderRadius: "15px",
    py: "3px",
  },
  ".MuiTabs-indicator": {
    height: "calc(100% - 6px)",
    background: "#343A40",
    borderRadius: "15px",
    bottom: "unset !Important",
    top: "3px",
  },
  ".MuiButtonBase-root": {
    color: "#343A40",
    fontSize: { md: "14px", xs: "12px" },
    fontWeight: "300",
    width: {md:"250px"},
  },
  ".MuiTouchRipple-root": {
    display: "none !important",
  },
  ".Mui-selected": {
    color: "#fff !important",
    position: "relative",
    zIndex: 999,
    fontWeight: "300 !important",
  },
};
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`banks-tabs-${index}`}
      aria-labelledby={`banks-tabs-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{display:"flex" , justifyContent:"center" , mt:{md:0 , xs:1}}}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `banks-tabs-${index}`,
  };
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
