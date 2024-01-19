import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import AllDigits from "../pages/home/allDigits";
import DashBoardLayout from "./dashboard";
import Footer from "./footer";
import Header from "./header";

interface MyComponentProps {
  children: ReactNode;
}
const Layout: React.FC<MyComponentProps> = ({ children }) => {
  const location = useLocation();

  return (
    <Box
      component={"main"}
      sx={{ bgcolor: "background.default", minHeight: "100vh" , pt:"65px" }}
    >
      <Header />
      {location.pathname.split("/")[1] === "dashboard" ? (
        <DashBoardLayout> {children}</DashBoardLayout>
      ) : (
        <>
          <> {children}</>
        </>
      )}
      <AllDigits />
      <Footer />
    </Box>
  );
};

export default Layout;
