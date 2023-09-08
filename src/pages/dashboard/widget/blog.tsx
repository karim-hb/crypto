import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlogWidget = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: {md:3 , xs:2},
        bgcolor: "background.default",
        borderRadius: "2px",
        gap: 2,
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          borderBottom: "1px solid #1C1B1F",
          mb:3,
          pb: 1,
        }}
      >
        <Typography variant="subtitle2">Card Title</Typography>
        <Typography variant="caption">Subtitle here</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{ display: "grid", gridTemplateColumns:{md: "1fr 1fr"}, gap: "10px" }}
        >
          <Box sx={{ display: "flex", gap: "15px" }}>
            <img
              width={48}
              height={48}
              style={{ flex: "none" , objectFit:"contain" }}
              src="/images/womanS.svg"
              alt=""
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "space-between",
                pb: 2,
              }}
            >
              <Typography
                sx={{ color: "#fff !important" }}
                variant="subtitle1"
                className="ellipsis-2"
              >
                Bankman-Fried met with white house aides on crypto policy before
                FTX Collapse
              </Typography>
              <Typography variant="subtitle1" className="ellipsis-3">
                Then FTX, among the highest profile crypto exchanges in the
                world, melted down in November as accusations of misappropriated
                customer funds began to fly. Last week, a federal judge in New
                York ordered FTX founder Sam Bankman-Fried released on $250
                million bond. He'll be under house arrest at his parents' home
                in Palo Alto, Calif., while he awaits trial.
              </Typography>{" "}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <img
              width={48}
              height={48}
              style={{ flex: "none" , objectFit:"contain" }}
              src="/images/manS.svg"
              alt=""
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "space-between",
                pb: 2,
              }}
            >
              <Typography
                sx={{ color: "#fff !important" }}
                variant="subtitle1"
                className="ellipsis-2"
              >
                Bankman-Fried met with white house aides on crypto policy before
                FTX Collapse
              </Typography>
              <Typography variant="subtitle1" className="ellipsis-3">
                Then FTX, among the highest profile crypto exchanges in the
                world, melted down in November as accusations of misappropriated
                customer funds began to fly. Last week, a federal judge in New
                York ordered FTX founder Sam Bankman-Fried released on $250
                million bond. He'll be under house arrest at his parents' home
                in Palo Alto, Calif., while he awaits trial.
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
        <Button
          sx={{ display: "flex", gap: 1 }}
          variant="outlined"
          color="inherit"
          className="fullWidth"
        >
          <span>See More </span>

          <img src="/images/arrowW.svg" alt="" />
        </Button>
      </Box>
    </Box>
  );
};

export default BlogWidget;
