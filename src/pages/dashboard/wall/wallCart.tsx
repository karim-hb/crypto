import { Box } from "@mui/system";
import React from "react";
interface MyComponentProps {
  buy: boolean;
  status: number;
}
const WallCart: React.FC<MyComponentProps> = ({ buy, status }) => {
  return (
    <Box
      sx={{
        borderTopRightRadius: "10px",
        display: "flex",
        flexDirection: "column",
        bgcolor:"background.default"
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          borderTopRightRadius: "10px",
          background:
            status === 1
              ? "#4CAF50"
              : status === 2
              ? "#FFC400"
              : status === 3
              ? "#313033"
              : "#E53935",
          color: status === 3 ? "#605D62" : "#000000",
          height: "38px",
          fontSize: "14px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          fontWeight:600,
          borderBottom:status === 3 ? "2px solid #000" : ""
        }}
      >
        {status === 1
          ? "In Range"
          : status === 2
          ? "Close to Stop-Loss"
          : status === 3
          ? "Passed"
          : "Cancelled"}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          height: "32px",
          background:"#313033"
        }}
      >
        {buy ? (
          <Box sx={{ color: "#4CAF50", fontSize: "20px", fontWeight: 700 }}>
            BUY
          </Box>
        ) : (
          <Box sx={{ color: "#E53935", fontSize: "20px", fontWeight: 700 }}>
            SELL
          </Box>
        )}
        <Box sx={{ height: "12px", width: "1px", background: "#605D62" }}></Box>
        <Box sx={{ display: "flex", gap: "2px", alignItems: "center" }}>
          <img src="/images/bitcoinS.svg" alt="" />
          <Box sx={{ fontSize: "14px", color: "#fff", fontWeight: 400 }}>
            BTC
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", px: 1, gap: 1 , mt:2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
               background: "#313033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 400,
              width: "35px",
              height: "22px",
              borderRadius:"20px",
            }}
          >
            T.F
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            30 min (Scalp)

          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
               background: "#313033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 400,
              width: "35px",
              height: "22px",
              borderRadius:"20px",
            }}
          >
            T.F
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
         22,880 - 22,890
          </Box>
        </Box>
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: 1,
          gap: 2,
          borderTop: "1px solid #1C1B1F",
          mt: 2,
          pt: 2,
          position:"relative"
        }}
      >
        <Box sx={{width:"1px" , background:"#1C1B1F" , height:"160px" , top:"20px" , left:"11px",zIndex:0 , position:"absolute"} }></Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{ position:"relative" , zIndex:"1",width: "8px", height: "8px",borderRadius:"50%", background: "#4CAF50" }}
          ></Box>
          <Box
            sx={{
               background: "#313033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 400,
              width: "35px",
              height: "22px",
              borderRadius:"20px",
            }}
          >
            T.P1
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            23,005
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{ position:"relative" , zIndex:"1",width: "8px", height: "8px",borderRadius:"50%", background: "#4CAF50" }}
          ></Box>
          <Box
            sx={{
               background: "#313033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 400,
              width: "35px",
              height: "22px",
              borderRadius:"20px",
            }}
          >
            T.P2
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            23,005
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{ position:"relative" , zIndex:"1",width: "8px", height: "8px",borderRadius:"50%", background: "#4CAF50" }}
          ></Box>
          <Box
            sx={{
               background: "#313033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 400,
              width: "35px",
              height: "22px",
              borderRadius:"20px",
            }}
          >
            T.P3
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            23,005
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{ position:"relative" , zIndex:"1",width: "8px", height: "8px",borderRadius:"50%", background: "#313033" }}
          ></Box>
          <Box
             sx={{
                background: "#313033",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               fontSize: "14px",
               fontWeight: 400,
               width: "35px",
               height: "22px",
               borderRadius:"20px",
             }}
          >
            T.P4
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            23,005
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{ position:"relative" , zIndex:"1",width: "8px", height: "8px",borderRadius:"50%", background: "#313033" }}
          ></Box>
          <Box
            sx={{
               background: "#313033",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 400,
              width: "35px",
              height: "22px",
              borderRadius:"20px",
            }}
          >
            T.P5
          </Box>
          <Box
            sx={{
             /*  background: "#313033", */
              color:"#fff",

              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            23,005
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderTop: "1px solid #1C1B1F",
          mt: 2,
          pt: 2,
          px:1,
          pb:3
        }}
      >
        <Box
          sx={{
             background: "#313033",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: 400,
            width: "35px",
            height: "22px",
            borderRadius:"30px"
          }}
        >
          S.L
        </Box>
        <Box
          sx={{
           /*  background: "#313033", */
            color:"#fff",

            fontSize: "16px",
            fontWeight: 400,
          }}
        >
       22,845
        </Box>
      </Box>
    </Box>
  );
};

export default WallCart;
