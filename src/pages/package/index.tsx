import { Box, Container, Paper } from "@mui/material";
import PackageLiteItem from "./items";

const Package = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 250px)" }}>
      <Container maxWidth="xl">
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: 2,
            mt: { md: 5 },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xl: "1fr 1fr 1fr 1fr",
                lg: "1fr 1fr 1fr",

                md: "1fr 1fr",
                xs: "1fr",
                gap: "10px",
              },
              ".mainImage": {
                width: "269px",
                height: "518.1px",
              },
            }}
          >
            {/* ----- dark mode --- */}
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-1Month).png"
              src2="/images/package/Manual Trade-1Month.png"
              price={100}
              color="#000"
              duration={" 1 Month (30 day)"}
              off={0}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-3Month).png"
              src2="/images/package/Manual Trade-3Month.png"
              price={285}
              color="#000"
              duration={" 3 Month (90 day)"}
              off={5}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-6Month).png"
              src2="/images/package/Manual Trade-6Month.png"
              price={550}
              color="#000"
              duration={" 6 Month (180 day)"}
              off={8}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-1Year).png"
              src2="/images/package/Manual Trade-1Year.png"
              price={1000}
              color="#000"
              duration={" 1 Year (365 day)"}
              off={16}
            />

            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-1Month).png"
              src2="/images/package/Auto Trade-1Month Final.png"
              price={110}
              color="#d2ad48"
              duration={" 1 Month (30 day)"}
              off={0}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-3Month).png"
              src2="/images/package/Auto Trade-3Month Final.png"
              price={310}
              color="#cf3b58"
              duration={" 3 Month (90 day)"}
              off={6}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-6Month).png"
              src2="/images/package/Auto Trade-6Month Final.png"
              price={600}
              color="#6cb26d"
              duration={" 6 Month (180 day)"}
              off={9}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-1Year).png"
              src2="/images/package/Auto Trade-1Year Final.png"
              price={1100}
              color="#4e5a8c"
              duration={" 1 Year (365 day)"}
              off={16}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Package;
