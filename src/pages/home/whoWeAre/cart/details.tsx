import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Details: React.FC<MyComponentProps> = ({
  image,
  title,
  description,
  to,
}) => {
  return (
    <Box sx={{ position: "relative", width: { md: "278px" } }}>
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
        sx={{
          py: { mt: 8, xs: 5 },
          px: { md: 2, xs: 3 },
          bgcolor: "background.default",
          maxWidth: "300px",
        }}
      >
        <Typography
          sx={{ mt: 7, minHeight: "61px", lineHeight: "30px" }}
          variant="h3"
        >
          {title}
        </Typography>
        <Typography
          sx={{ mt: 1, lineHeight: "1.5 !important" }}
          variant="subtitle1"
        >
          {description}
        </Typography>
        <Link to={to}>
          <Button
            sx={{ display: "flex", gap: 1, mt: 3, color: "#fff" }}
            variant="outlined"
            color="inherit"
          >
            <span>Read More</span>

            <img src="/images/arrowW.svg" alt="" />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Details;
interface MyComponentProps {
  image: string;
  title: string;
  description: string;
  to: string;
}
