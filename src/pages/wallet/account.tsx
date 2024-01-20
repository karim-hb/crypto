import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Account = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          borderBottom: "1px solid #fff",
          mb: 1,
          pb: 1,
        }}
      >
        <Typography variant="body1">Withdraw</Typography>
        <Typography variant="body2">Create New Withdraw Request</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <Typography sx={{ minWidth: "130px" }} variant="body1">
          Wallet Address
        </Typography>
        <TextField
          sx={{ input: { textAlign: "center !important" } }}
          fullWidth
          variant="standard"
          placeholder="Enter Your USDT Address"
        />
      </Box>
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <Typography sx={{ minWidth: "130px" }} variant="body1">
          Amount (USDT)
        </Typography>
        <TextField
          sx={{ input: { textAlign: "center !important" } }}
          variant="standard"
          fullWidth
          placeholder="Enter Amount (Your Max Amount : 80 USDT)"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "white",
              }}
            ></Box>
            <Typography variant="subtitle2">
              Min withdrawal amount : 40 USDT
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "white",
              }}
            ></Box>
            <Typography variant="subtitle2">
              The amount should be a multiple of 20 USDT
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{
            display: "flex",
            gap: 1,
            color: "#fff",
            height: "60px !important",
            fontSize: "13px !important",
            width: "170px !important",
          }}
          variant="outlined"
          color="inherit"
        >
          <span>
            WithDrawal Reguest <br /> (Check Your Email){" "}
          </span>
        </Button>{" "}
      </Box>
    </Box>
  );
};

export default Account;
