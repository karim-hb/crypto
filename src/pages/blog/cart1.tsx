import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useMediaQuery } from "@mui/material";
const Cart1 = ({ item }: any) => {
    const isLg = useMediaQuery("(min-width:960px)");

  return (
    <Card sx={{ display: "flex", boxShadow: "none !important" }}>
      <CardMedia
        component="img"
        sx={{ width: {md:190 , xs:90}, borderRadius: "10px" }}
        image={item.img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "4px 10px",
            justifyContent: "space-between !important",
            display: "flex",
            flexDirection: "column",
            paddingBottom:"5px !important" , gap:"3px"
          }}
        >
          <Typography className={isLg ? "" :"ellipsis-2"} component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography
            variant="caption"
            className={isLg ? "" :"ellipsis-2"}
            sx={{ fontSize: {md:"0.8rem" ,xs:"0.7rem" } , color:"#716c71"}}
            /*      color="text.secondary"
            component="div" */
          >
            {item.descriptions}
          </Typography>{" "}
          <Typography
            variant="caption"
            sx={{ fontSize: {md:"0.8rem" ,xs:"0.7rem" } , color:"#716c71"}}
            /*      color="text.secondary"
            component="div" */
          >
            {item.date}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Cart1;
