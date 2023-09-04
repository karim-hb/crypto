import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import { Box, Container, Typography } from "@mui/material";

interface MyComponentProps {
  children: ReactNode;
}
const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <Box
      component={"main"}
      sx={{ bgcolor: "background.default", minHeight: "100vh" }}
    >
      <Header />
      <> {children}</>

      <Footer />
    </Box>
  );
};

export default Layout;
