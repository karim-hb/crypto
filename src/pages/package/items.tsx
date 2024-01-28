import { BorderRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const PackageLiteItem = ({
  src,
  src2,
  color,
  price,
  duration,
  off,
  src3,
  darkMode,
  src4,
}: any) => {
  return (
    <Box sx={{      width: "100%",
    display: "flex",
    justifyContent: "center",}}>
      {" "}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          background: darkMode
            ? "#000"
            : "radial-gradient(farthest-corner at 40px 40px,#4490d2   0%,#36bfbe 100%)",
          borderRadius: "15px",
          overflow:"hidden",
          maxWidth:'269px'
        }}
      >
        <Box className="mainImage" sx={{ position: "relative" }}>
          {/*           <img className="mainImage" src={src} alt="" />
           */}{" "}
          <Box
            sx={{
              position: "absolute",
              top: "88px",
              left:darkMode ? "calc(50% )"  :"50%",
              transform: "translateX(-50%)",
              width: "120px",
              zIndex: 2,
            }}
            component="img"
            src={src2}
          />{" "}
          <Box
            sx={{
              position: "absolute",
              top: "45px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "185px",
              zIndex: 1,
            }}
            component="img"
            src={src3}
          />
          <Box
            sx={{
              position: "absolute",
              top: "255px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "35px",
              fontWeight: "500",
              color: color,
              width: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              background: src4
                ? `url(${src4}) center center !important`
                : "#fff",
            }}
          >
            {price}$
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "330px",
              right: "0px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#000",
              background: "red",
              width: "125px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 50%)",
              zIndex:2

              /*               padding:"10px 40px 10px 20px",
               */
            }}
          >
            OFF %{off}
          </Box>  <Box
            sx={{
              position: "absolute",
              top: "326px",
              right: "-5px",
              background: "#000",
        
              width: "134px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 50%)",

       zIndex:1
            }}
          >
          </Box>
     
          <Box
            sx={{
              position: "absolute",
              bottom: "160px",
              left: "58px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              style={{ width: "25px" }}
              src="/images/package/Auto (white).png"
            />
            {color === "#000" ? "Manual" : "Auto"}
            Trade
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "105px",
              left: "58px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {" "}
            <img
              style={{ width: "25px" }}
              src="/images/package/Time (white).png"
            />
            {duration}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              sx={{ display: "flex", gap: 1, width: "200px !important" }}
              variant="outlined"
              color="inherit"
            >
              <span>Select this package</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PackageLiteItem;
