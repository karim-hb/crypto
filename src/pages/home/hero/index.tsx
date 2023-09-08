import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Texts from "./texts";

const Hero = () => {
  const isLg = useMediaQuery("(min-width:960px)");

  return (
    <Paper
      sx={{
        borderRadius: "20px",
        px: { lg: 0, xs: 3 },
        pt: { lg: 14, xs: 3 },
        position: "relative",
        minHeight: { lg: "730px" },
        /*         maxHeight:{lg:"759px"},
         */ overflow: "hidden",
        height: { lg: "90vh", xs: "60vh" },
      }}
    >
      <Container maxWidth="xl">
        {isLg && (
          <>
            {" "}
            <Box sx={{ position: "absolute", top: 0, right: 0 }}>
              <img src="/images/wave.svg" alt="" />
            </Box>
            <motion.div
              style={{
                background: "#000",
                padding: "10px 30px",
                display: "flex",
                gap: 3,
                position: "absolute",
                top: "77vh",
                right: "300px",
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5  }}
            >
              <img src="/images/tron.svg" alt="" />
              <Box>
                <Box sx={{ display: "flex ", gap: 1, alignItems: "center" }}>
                  <Typography variant="body2">Tron</Typography>
                  <Typography variant="subtitle1">TRX</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex ",
                    gap: 1,
                    alignItems: "center",
                    mt: "10px",
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      borderRadius: "50px",
                      py: "5px",
                      px: "10px",
                      textAlign: "center",
                      bgcolor: "background.paper",
                    }}
                  >
                    TP3
                  </Box>
                  <Typography variant="body2">0.0679</Typography>
                </Box>
              </Box>
            </motion.div>
            <motion.div
              style={{
                background: "#000",
                padding: "10px 30px",
                display: "flex",
                gap: 3,
                position: "absolute",
                top: "45%",
                right: "420px",
              }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src="/images/bitcoin.svg" alt="" />
              <Box>
                <Box sx={{ display: "flex ", gap: 1, alignItems: "center" }}>
                  <Typography variant="body2">Bitcoin</Typography>
                  <Typography variant="subtitle1">BTC</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex ",
                    gap: 1,
                    alignItems: "center",
                    mt: "10px",
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      borderRadius: "50px",
                      py: "5px",
                      px: "10px",
                      textAlign: "center",
                      bgcolor: "background.paper",
                    }}
                  >
                    TP1
                  </Box>
                  <Typography variant="body2">17.321</Typography>
                </Box>
              </Box>
            </motion.div>
            <motion.div
              style={{
                background: "#000",
                padding: "10px 30px",
                display: "flex",
                gap: 3,
                position: "absolute",
                top: "77vh",
                right: "650px",
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src="/images/etheruem.svg" alt="" />
              <Box>
                <Box sx={{ display: "flex ", gap: 1, alignItems: "center" }}>
                  <Typography variant="body2">Ethereum</Typography>
                  <Typography variant="subtitle1">ETH</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex ",
                    gap: 1,
                    alignItems: "center",
                    mt: "10px",
                  }}
                >
                  {" "}
                  <Box
                    sx={{
                      borderRadius: "50px",
                      py: "5px",
                      px: "10px",
                      textAlign: "center",
                      bgcolor: "background.paper",
                    }}
                  >
                    TP5
                  </Box>
                  <Typography variant="body2">1,292</Typography>
                </Box>
              </Box>
            </motion.div>
          </>
        )}

        <Texts />
      </Container>
    </Paper>
  );
};

export default Hero;
