import { Box, Container, Paper, Typography } from "@mui/material";
import PackageLiteItem from "./items";

const Package = () => {
  return (
    <Box sx={{ minHeight: "calc(100vh - 190px)" }}>
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
        >          <Typography variant="h1" className="custome_h1">Packages </Typography>

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
                height: "590px",
              },
            }}
          >
            {/* ----- dark mode --- */}
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-1Month).png"
              src2="/images/package/Manual Trade-1Month.png"
              src3="/images/package/elipse02.png"
              src4="/images/package/Rectangle02-Copy.png"

              price={100}
              color="#000"
              duration={" 1 Month (30 day)"}
              off={0}
              darkMode
            />
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-3Month).png"
              src2="/images/package/Manual Trade-3Month.png"
              src3="/images/package/elipse04.png"
              src4="/images/package/Rectangle04-Copy.png"
              price={285}
              color="#000"
              duration={" 3 Month (90 day)"}
              off={5}
              darkMode
            />
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-6Month).png"
              src2="/images/package/Manual Trade-6Month.png"
              src3="/images/package/elipse03.png"
              src4="/images/package/Rectangle03-Copy.png"
              price={550}
              color="#000"
              duration={" 6 Month (180 day)"}
              off={8}
              darkMode
            />
            <PackageLiteItem
              src="/images/package/Package Box (Manual Trade-1Year).png"
              src2="/images/package/Manual Trade-1Year.png"
              src3="/images/package/elipse01.png"
              src4="/images/package/Rectangle01-Copy.png"
              price={1000}
              color="#000"
              duration={" 1 Year (365 day)"}
              off={16}
              darkMode
            />

            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-1Month).png"
              src2="/images/package/Auto Trade-1Month Final.png"
              src3="/images/package/elipse08 - Copy.png"

              price={110}
              color="#d2ad48"
              duration={" 1 Month (30 day)"}
              off={0}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-3Month).png"
              src2="/images/package/Auto Trade-3Month Final.png"
              src3="/images/package/elipse07 - Copy.png"

              price={310}
              color="#cf3b58"
              duration={" 3 Month (90 day)"}
              off={6}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-6Month).png"
              src2="/images/package/Auto Trade-6Month Final.png"
              src3="/images/package/elipse05.png"

              price={600}
              color="#6cb26d"
              duration={" 6 Month (180 day)"}
              off={9}
            />
            <PackageLiteItem
              src="/images/package/Package Box (Auto Trade-1Year).png"
              src2="/images/package/Auto Trade-1Year Final.png"
              src3="/images/package/elipse06.png"

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
