import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box component={"article"} sx={{ minHeight: "calc(100vh - 250px)" }}>
      <Container maxWidth={"xxl" as any}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: 2,
            mt: { md: 5 },
          }}
        >
          <Typography variant="h1">About us</Typography>
          <Typography variant="h3">Why should we use GETRICHEX?</Typography>

          <Typography sx={{ lineHeight: "30px" }} variant="body2">
            The fluctuating crypto market, can be profitable for professional
            traders. So GETRICHEX, collected a group of experts in this field so
            that you can make profit with just a few simple clicks and without
            going through the path of education and experience. So if you are
            professional, you can save time and increase the number of
            profitable transactions by GETRICHEX. And if you are amateur you can
            get a lot of profit and also gain experience by GETRICHEX. Just
            follow the signal instructions step by step. Make profit and GET
            RICH!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
