import { Box } from "@mui/material";

const PackageLiteItem = ({ src, src2, color, price, duration, off }: any) => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="mainImage" sx={{ position: "relative" }}>
          <img className="mainImage" src={src} alt="" />
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "73px",
              width: "120px",
            }}
            component="img"
            src={src2}
          />
          <Box
            sx={{
              position: "absolute",
              top: "255px",
              left: "90px",
              fontSize: "35px",
              fontWeight: "500",
              color: color,
            }}
          >
            {price}$
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "335px",
              right: "40px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            OFF %{off}
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "102px",
              left: "90px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {
                color === "#000" ? "Manual": "Auto"
            }
             Trade
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "45px",
              left: "90px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {duration}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PackageLiteItem;
