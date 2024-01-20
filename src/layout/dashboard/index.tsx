import { Box, Paper, useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
import Aside from "./aside";
interface MyComponentProps {
  children: ReactNode;
}
const DashBoardLayout: React.FC<MyComponentProps> = ({ children }) => {
  const isLg = useMediaQuery("(min-width:960px)");

  return (
    <Paper sx={{mx:{md:"24px"}}}>
      <Box
        sx={{
          maxWidth: "1370px",
          mx: "auto",
          px: "10px",
          minHeight: "85vh",

          py: 9,
          gap: 1,
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: isLg ? "250px 1fr" : "1fr",
        }}
      >
        {isLg ? (
          <>
            <Aside />
          </>
        ) : (
          <></>
        )}
        <Box sx={{ overflowX: "hidden" }}>{children}</Box>
      </Box>
    </Paper>
  );
};

export default DashBoardLayout;
