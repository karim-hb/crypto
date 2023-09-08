import { Box, Typography } from "@mui/material";

const NewsList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: {md:3 , xs:2},
        bgcolor: "background.default",
        borderRadius: "2px",
        gap: 2,
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          borderBottom: "1px solid #1C1B1F",
          mb: 1,
          pb: 1,
        }}
      >
        <Typography variant="subtitle2">Card Title</Typography>
        <Typography variant="caption">Subtitle here</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <img width={48} height={48} src="/images/womanS.svg" alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-between",
            pb: 2,
          }}
        >
          <Typography
            sx={{ color: "#fff !important" }}
            variant="subtitle1"
            className="ellipsis-2"
          >
            Bankman-Fried met with white house aides on crypto policy before FTX
            Collapse
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{ width: "6px", height: "6px", background: "#31E1F7" }}
            ></Box>
            <Typography variant="subtitle2">3h ago</Typography>
            <Typography
              sx={{ textDecoration: "underline !important", ml: 2 }}
              variant="subtitle2"
            >
              Read More
            </Typography>
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", gap: "15px" }}>
        <img width={48} height={48} src="/images/manS.svg" alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-between",
            pb: 2,
          }}
        >
          <Typography
            sx={{ color: "#fff !important" }}
            variant="subtitle1"
            className="ellipsis-2"
          >
            Bankman-Fried met with white house aides on crypto policy before FTX
            Collapse
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{ width: "6px", height: "6px", background: "#31E1F7" }}
            ></Box>
            <Typography variant="subtitle2">3h ago</Typography>
            <Typography
              sx={{ textDecoration: "underline !important", ml: 2 }}
              variant="subtitle2"
            >
              Read More
            </Typography>
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", gap: "15px" }}>
        <img width={48} height={48} src="/images/womanS.svg" alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-between",
            pb: 2,
          }}
        >
          <Typography
            sx={{ color: "#fff !important" }}
            variant="subtitle1"
            className="ellipsis-2"
          >
            Bankman-Fried met with white house aides on crypto policy before FTX
            Collapse
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Box
              sx={{ width: "6px", height: "6px", background: "#31E1F7" }}
            ></Box>
            <Typography variant="subtitle2">3h ago</Typography>
            <Typography
              sx={{ textDecoration: "underline !important", ml: 2 }}
              variant="subtitle2"
            >
              Read More
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsList;
