import { Box, Typography } from "@mui/material";
import React from "react";

const Details: React.FC<MyComponentProps> = ({ image, title, description }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          transform: "translateX(-50%)",
          top: "-30px",
          left: "50%",
        }}
      >
        {" "}
        <img src={image} alt="" width={131} />{" "}
      </Box>

      <Box
        sx={{ py: {md:8 , xs:5}, px: {md:6 , xs:3}, bgcolor: "background.default", maxWidth: "300px" }}
      >
        <Typography sx={{ mt: 7 }} variant="h3">
          {title}
        </Typography>
        <Typography
          sx={{ mt: 1, lineHeight: "1.5 !important" }}
          variant="subtitle1"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Details;
interface MyComponentProps {
  image: string;
  title: string;
  description: string;
}
