import { Box, Button, Typography } from "@mui/material";

const Texts = () => {
  return (
    <Box sx={{display:"flex" , flexDirection:"column" , gap:{md:"3px" , xs:"10px"}}}>
      {" "}
      <Typography variant="h1" component={"h1"}>
        It’s all about
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography variant="h1" component={"h1"}>
          the
        </Typography>
        <Typography className="gh1" sx={{ color: "" }} variant="h1">
          future
        </Typography>
      </Box>
      <Typography sx={{ mt: 2, maxWidth: "390px" }} variant="subtitle1">
        Lorem Ipsum is simply dummy text of the printing & typesetting industry.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button sx={{ display: "flex", gap: 1 }} variant="contained">
          <span>Get Started</span>

          <img src="/images/arrow.svg" alt="" />
        </Button>
        <Button
          sx={{ display: "flex", gap: 1 }}
          variant="outlined"
          color="inherit"
        >
          <span>Free Signals</span>

          <img src="/images/arrowW.svg" alt="" />
        </Button>
      </Box>
    </Box>
  );
};

export default Texts;
