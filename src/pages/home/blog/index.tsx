import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

const Blogs = () => {
  return (
    <Paper sx={{ py: 6, my: 3 }}>
      <Container sx={{ mt: 3 }} maxWidth="xl">
        {" "}
        <Box
          sx={{
            display: "grid",
            gap: "50px",
            gridTemplateColumns: { md: "1fr 1fr 1fr" , xs:"1fr" },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: { md: "1fr 1fr 1fr" },
              gridColumn: "span 2 / span 3",
              order: { md: 0, xs: 2 },
            }}
          >
            <Box
              sx={{
                bgcolor: "background.default",
                p: 3,
                display: "flex",
                gap: 2,
                gridColumn: "span 2 / span 3",
              }}
            >
              <img src="/images/woman.svg" alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "space-between",
                  pb: 2,
                }}
              >
                <Typography variant="h3" className="ellipsis-2">
                  Bankman-Fried met with white house aides on crypto policy
                  before FTX Collapse
                </Typography>
                <Typography variant="subtitle1" className="ellipsis-3">
                  Then FTX, among the highest profile crypto exchanges in the
                  world, melted down in November as accusations of
                  misappropriated customer funds began to fly. Last week, a
                  federal judge in New York ordered FTX founder Sam
                  Bankman-Fried released on $250 million bond. He'll be under
                  house arrest at his parents' home in Palo Alto, Calif., while
                  he awaits trial.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {" "}
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    ></Box>{" "}
                    <Typography variant="subtitle2">3h ago</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {" "}
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    >
                      {" "}
                    </Box>{" "}
                    <Typography variant="subtitle2">Alireza Qolami</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                bgcolor: "background.default",
                p: 3,
                display: "flex",
                gap: 2,
                flexDirection: "column",
              }}
            >
              <Typography variant="h3" className="ellipsis-2">
                Bankman-Fried met with white house aides on crypto policy Before
                FTX Collapse
              </Typography>{" "}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {" "}
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                ></Box>{" "}
                <Typography variant="subtitle2">3h ago</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {" "}
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                >
                  {" "}
                </Box>{" "}
                <Typography variant="subtitle2">Alireza Qolami</Typography>
              </Box>
            </Box>{" "}
            <Box
              sx={{
                bgcolor: "background.default",
                p: 3,
                display: "flex",
                gap: 2,
                flexDirection: "column",
              }}
            >
              <Typography variant="h3" className="ellipsis-2">
                Bankman-Fried met with white house aides on crypto policy Before
                FTX Collapse
              </Typography>{" "}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {" "}
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                ></Box>{" "}
                <Typography variant="subtitle2">3h ago</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {" "}
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                >
                  {" "}
                </Box>{" "}
                <Typography variant="subtitle2">Alireza Qolami</Typography>
              </Box>
            </Box>{" "}
            <Box
              sx={{
                bgcolor: "background.default",
                p: 3,
                display: "flex",
                gap: 2,
                gridColumn: "span 2 / span 3",
              }}
            >
              <img src="/images/man.svg" alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "space-between",
                  pb: 2,
                }}
              >
                <Typography variant="h3" className="ellipsis-2">
                  Bankman-Fried met with white house aides on crypto policy
                  before FTX Collapse
                </Typography>
                <Typography variant="subtitle1" className="ellipsis-3">
                  Then FTX, among the highest profile crypto exchanges in the
                  world, melted down in November as accusations of
                  misappropriated customer funds began to fly. Last week, a
                  federal judge in New York ordered FTX founder Sam
                  Bankman-Fried released on $250 million bond. He'll be under
                  house arrest at his parents' home in Palo Alto, Calif., while
                  he awaits trial.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {" "}
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    ></Box>{" "}
                    <Typography variant="subtitle2">3h ago</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {" "}
                    <Box
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    >
                      {" "}
                    </Box>{" "}
                    <Typography variant="subtitle2">Alireza Qolami</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: {md:"20px" , xs:"20px"},
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">Blog & Report</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum .
            </Typography>{" "}
            <Button
              sx={{ display: "flex", gap: 1 }}
              variant="outlined"
              color="inherit"
            >
              <span>Read More</span>

              <img src="/images/arrowW.svg" alt="" />
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Blogs;
