import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function Cart2({ item }: any) {
  return (
    <Card sx={{ border: "1px solid #414141", borderRadius: "8px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={item.img}
          alt="green iguana"
          sx={{ borderRadius: "8px" }}
        />
        <CardContent>
          <Typography className="ellipsis-2" gutterBottom variant="h5">
            {item.title}
          </Typography>
          <Typography    sx={{ color:"#716c71"}} className="ellipsis-2" variant="body2">
            {item.descriptions}
          </Typography>
          <Box sx={{ mt: 3 }}>
            {" "}
            <Typography  sx={{ color:"#716c71"}}  className="ellipsis-2" variant="body2">
              {item.date}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
