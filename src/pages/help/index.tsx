import React from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const Help = () => {
  return (
    <Paper
      component={"article"}
      sx={{ minHeight: "calc(100vh - 190px)", py: { md: "14px" } }}
    >
      <Container maxWidth={"xxl" as any}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: { md: 1, xs: 4 },
            mt: { md: 5 },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography className="custome_h1" variant="h1">
            What can we help you with ?
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              sx={{ background: "#414141", width: { sm: "400px", xs: "100%" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              placeholder="Type your question here ..."
            />{" "}
            <Button sx={{ display: "flex", gap: 1 , height:"54px !important" }} variant="contained">
              <span>search </span>
            </Button>
          </Box>
          <Box
            sx={{
              maxWidth: "900px",
              display: "grid",
              mt: 3,
              gridTemplateColumns: { md: "1fr 1fr 1fr ", gap: "20px" },
            }}
          >
            <Link to="/contact">
              <Box sx={CartStyle}>
                <ForwardToInboxIcon />
                <Typography variant="h5">Category Title 1</Typography>{" "}
                <Typography variant="subtitle1">
                  Description description description description description{" "}
                </Typography>
              </Box>
            </Link>
            <Link to="/faq">
              <Box sx={CartStyle}>
                <LiveHelpIcon />
                <Typography variant="h5">Category Title 2</Typography>{" "}
                <Typography variant="subtitle1">
                Description description description description description{" "}

                </Typography>
              </Box>
            </Link>
            <Link to="/about">
              <Box sx={CartStyle}>
                <AccountBalanceIcon />
                <Typography variant="h5">Category Title 3</Typography>{" "}
                <Typography variant="subtitle1">
                Description description description description description{" "}
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Help;

const CartStyle = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  alignItems: "center",
  background: "#303030",
  borderRadius: "6px",
  padding: "30px 15px",
  width: "100%",
  gap: 2,
  minHeight: "300px",
  svg: {
    width: "100px",
    fontSize: "80px",
  },
  textAlign: "center",
  color: "#fff",
};
