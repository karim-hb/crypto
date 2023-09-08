import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Links = () => {
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
          mb: 1,
          pb: 1,
        }}
      >
        <Typography variant="subtitle2">Card Title</Typography>
        <Typography variant="caption">Subtitle here</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="caption">1</Typography>
          </Box>{" "}
          <Typography variant="subtitle2">Link One</Typography>
        </Box>
        <img src="/images/arrowRight.svg" alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="caption">2</Typography>
          </Box>{" "}
          <Typography variant="subtitle2">Link Two</Typography>
        </Box>
        <img src="/images/arrowRight.svg" alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="caption">3</Typography>
          </Box>{" "}
          <Typography variant="subtitle2">Link Three </Typography>
        </Box>
        <img src="/images/arrowRight.svg" alt="" />
      </Box>
      <Button
        sx={{ display: "flex", gap: 1 , mt:"2px" }}
        variant="outlined"
        color="inherit"
        className="fullWidth"
      >
        <span>See More</span>

        <img src="/images/arrowW.svg" alt="" />
      </Button>
    </Box>
  );
};

export default Links;
