import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
const Details = ({ index, text }: any) => {
  const isMd = useMediaQuery("(min-width:960px)");
  return (
    <div>
      {isMd && (
        <motion.div
          style={{
            width: "50px",
            height: "30px",
            background: "#137b80",
            borderRadius: "5px",
            position: "absolute",
            top: `calc(${index * 100}px - 10px)`,
            left: index % 2 === 0 ? "auto" : `calc(50% + 50px)`,
            right: index % 2 !== 0 ? "auto" : `calc(50% + 50px)`,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
          className={`${index % 2 === 0 ? "triangleL" : "triangleR"}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index / 2 + 0.5 }}
        >
          step {index + 1}
        </motion.div>
      )}{" "}
      <motion.div
        style={{
          /* height: "30px", */
          background: "#137b80",
          borderRadius: "5px",
          position: "absolute",
          top: `calc(${index * 100}px - 10px)`,
          right:isMd ? index % 2 === 0 ? "auto" : `calc(50% + 50px)` : "unset",
          left:isMd ?  index % 2 !== 0 ? "auto" : `calc(50% + 50px)` : '30px',

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          padding: "10px 30px",
          border: "1px solid #ccc",
        }}
        initial={{ opacity: 0, x: isMd ? index % 2 !== 0 ? -100 : 100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index / 2 + 0.5 }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Details;
