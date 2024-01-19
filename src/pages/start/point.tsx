import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const Point = ({ position , index }: any) => {
    const isMd = useMediaQuery("(min-width:960px)");

  return (
    <motion.div
      style={{
        width: "15px",
        height: "15px",
        background: "#137b80",
        borderRadius: "50%",
        border:"2px solid #000",

        position: "absolute",
        top:`${index * 100}px`,
        left:isMd ?"50%" : "0px",
        translateX: "-6px",
      }}
    ></motion.div>
  );
};

export default Point;
