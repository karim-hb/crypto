import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Texts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { md: "3px", xs: "10px" },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Typography variant="h1" component={"h1"}>
          Make profit
        </Typography>{" "}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="h1" component={"h1"}>
            and
          </Typography>
          <Typography className="gh1" sx={{ color: "" }} variant="h1">
            get rich
          </Typography>
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Typography sx={{ mt: 2, maxWidth: "390px" }} variant="subtitle1">
          Enjoy surffing the cyrptocurrency wave with us .
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Link to="/sing-up">
            <Button sx={{ display: "flex", gap: 1 }} variant="contained">
              <span>Get Started</span>

              <img src="/images/arrow.svg" alt="" />
            </Button>
          </Link>

          <Link to="/how-to-start">
            <Button
              sx={{ display: "flex", gap: 1 , color:"#fff" }}
              variant="outlined"
              color="inherit"
            >
              <span>How to start</span>

              <img src="/images/arrowW.svg" alt="" />
            </Button>{" "}
          </Link>
        </Box>{" "}
      </motion.div>
    </Box>
  );
};

export default Texts;
