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

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false);
  return (
    <Paper
      sx={{
     
      
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
          <Typography variant="h2">{isLogin ? "Login" : "Register"}</Typography>
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
              }}
              className={`transition-all ${
                !isLogin ? "fade-exit" : "fade-enter"
              }`}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { md: "1fr " },
                  gap: "10px",
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
                />
              </Box>
              <TextField
                placeholder="Password"
                type={!seePassword ? "password" : "text"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/images/lock.svg" alt="" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setSeePassword(!seePassword)}>
                        {seePassword ? (
                          <>
                            <VisibilityIcon
                              sx={{ fontSize: "1.2rem!important" }}
                            />
                          </>
                        ) : (
                          <>
                            <VisibilityOffIcon
                              sx={{ fontSize: "1.2rem!important" }}
                            />
                          </>
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <TextField
                type={!seeRepeatPassword ? "password" : "text"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/images/lock.svg" alt="" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      onClick={() => setSeeRepeatPassword(!seeRepeatPassword)}
                      position="end"
                    >
                      <IconButton>
                        {seeRepeatPassword ? (
                          <>
                            <VisibilityIcon
                              sx={{ fontSize: "1.2rem!important" }}
                            />
                          </>
                        ) : (
                          <>
                            <VisibilityOffIcon
                              sx={{ fontSize: "1.2rem!important" }}
                            />
                          </>
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                placeholder="Confirm your password"
              />
              <TextField
                placeholder="Got referral Code ? (Optional) "
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/images/email.svg" alt="" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox />
                <Typography
                  sx={{
                    a: {
                      color: "#31e1f7 !important",
                      marginInline: "4px",
                    },
                  }}
                  variant="body2"
                >
                  I agree with
                  <a href="/privacy-policy" target={"_blank"}>
                    Privacy Ploicy
                  </a>
                  ,
                  <a href="terms-and-conditions" target={"_blank"}>
                    Terms and Condition
                  </a>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button sx={{ display: "flex", gap: 1 }} variant="contained">
                  <span>Sumbit</span>

                  <img src="/images/arrow.svg" alt="" />
                </Button>
                <Button
                  sx={{ display: "flex", gap: 1 }}
                  variant="outlined"
                  color="inherit"
                  className="fullWidth"
                  onClick={() => setIsLogin(true)}
                >
                  <span>Login to your account</span>

                  <img src="/images/arrowW.svg" alt="" />
                </Button>
              </Box>{" "}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 4,
                position: "absolute",
              }}
              className={`transition-all ${
                isLogin ? "fade-exit" : "fade-enter"
              }`}
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
                placeholder="Password"
                type={!seePassword ? "password" : "text"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src="/images/lock.svg" alt="" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setSeePassword(!seePassword)}>
                        {seePassword ? (
                          <>
                            <VisibilityIcon
                              sx={{ fontSize: "1.2rem!important" }}
                            />
                          </>
                        ) : (
                          <>
                            <VisibilityOffIcon
                              sx={{ fontSize: "1.2rem!important" }}
                            />
                          </>
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <Box sx={{ height: { md: "56px" } }}></Box>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button sx={{ display: "flex", gap: 1 }} variant="contained">
                  <span>Sumbit</span>

                  <img src="/images/arrow.svg" alt="" />
                </Button>
                <Button
                  sx={{ display: "flex", gap: 1 }}
                  variant="outlined"
                  color="inherit"
                  className="fullWidth"
                  onClick={() => setIsLogin(false)}
                >
                  <span>Create a New Account</span>

                  <img src="/images/arrowW.svg" alt="" />
                </Button>
              </Box>{" "}
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                <Typography variant="subtitle2">or</Typography>{" "}
                <Typography
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  variant="subtitle2"
                >
                  Reset your password
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { md: "flex", xs: "none" } }}>
          <img
            style={{ width: "100%" , objectFit:"contain"}}
            src="/images/GetRichex Logo PNG.png"
            alt=""
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default SignUp;
