import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Contact = () => {
  return (
    <Paper
      sx={{
        /*   mx: {md:"24px"}, */
        px: "10px",
        height: "83vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "998px",
          padding: { md: "40px", xs: "20px" },
          m: "auto",
          bgcolor: "background.default",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr" },
          gap: "0px",
          borderRadius: "2px",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="h2">Contact Us</Typography>
          <Box
            sx={{ display: "block", position: "relative", minHeight: "481px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 4,
                position: "absolute",
                width:"100%"
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { md: "1fr " },
                  gap: "10px",
                  minWidth:{md:"400px" , xs:"100%"},
                  width:"100%"
                }}
              >
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src="/images/userI.svg" alt="" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  placeholder="Profile name"
                />
                <TextField
                  placeholder="Email Address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src="/images/email.svg" alt="" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />{" "}
                <TextField
                  placeholder="Subject"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src="/images/email.svg" alt="" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />{" "}
                <TextField
                  placeholder="Message"
                  rows={3}
                  multiline={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{height:"100%" , maxHeight:"100%" , alignItems:'flex-start'}} position="start">
                        <img src="/images/email.svg" alt="" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button sx={{ display: "flex", gap: 1  , minWidth:{md:"200px"}}} variant="contained">
                  <span>Send Message</span>

                  <img src="/images/arrow.svg" alt="" />
                </Button>
             {/*    <Button
                  sx={{ display: "flex", gap: 1 }}
                  variant="outlined"
                  color="inherit"
                  className="fullWidth"
                >
                  <span>Login to your account</span>

                  <img src="/images/arrowW.svg" alt="" />
                </Button> */}
              </Box>{" "}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { md: "flex", xs: "none" } }}>
          <img
            style={{ width: "100%", objectFit: "contain" }}
            src="/images/GetRichex Logo PNG.png"
            alt=""
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default Contact;
