import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Items = ({ item }: any) => {
  return (
    <>
      {" "}
      {item.child.length === 0 ? (
        <>
          <Link to={item.path}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#ccc",
                transition: "all 300ms",
                ":hover": {
                  color: "#fff",
                },
              }}
            >
              {item.title}
            </Typography>
          </Link>
        </>
      ) : (
        <Box
          sx={{
            position: "relative",
            ":hover": {
              ".menu_options": {
                display: "block",
              },
            },
          }}
        >
          {" "}
          <Typography
            variant="subtitle2"
            className="hoverMenu"
            sx={{
              color: "#ccc",
              transition: "all 300ms",
              cursor: "pointer",
              ":hover": {
                color: "#fff",
              },
            }}
          >
            {item.title}
          </Typography>
          <div className={`menu_options`}>
            <Box component="ul" sx={{ pl: 3 ,background:'rgb(49, 48, 48)' , boxShadow:" 0 0 5px rgba(0, 0, 0, 0.5)" , borderRadius:"5px" , marginTop:"12px" , py:1}}>
              {item.child.map((item: any, index: number) => (
                <Link key={item.title} to={item.path}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#ccc",
                      transition: "all 300ms",
                      ":hover": {
                        color: "#fff",
                      },
                      py: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </div>
        </Box>
      )}
    </>
  );
};

export default Items;
