import { Box } from "@mui/system";
import AreaChart from "./widget/areaChart";
import BlogWidget from "./widget/blog";
import CartSummery2 from "./widget/cartSummery2";
import CartSummery from "./widget/cartSummey";
import Links from "./widget/links";
import NewsList from "./widget/newList";
import RadarChart from "./widget/radar";
import TableWidget from "./widget/table";

const Dashboard = () => {
  return (
    <>
      <Box
        sx={{
          display: {lg:"grid" ,xs:"flex" },
          gridTemplateColumns: { lg: "repeat(12,1fr)" },
          gap: 2,
          flexDirection:"column"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            gridColumn: "span 4 / span 12",
            height:"100%",
            justifyContent:"space-between",
          }}
        >
          <CartSummery type={1} />
          <CartSummery />
        </Box>
        <Box
          sx={{
            gridColumn: "span 5 / span 12",
          }}
        >
          <AreaChart />
        </Box>
        <Box
          sx={{
            gridColumn: "span 3 / span 12",
          }}
        >
          <Links />
        </Box>
        <Box
          sx={{
            gridColumn: "span 6 / span 12",
          }}
        >
          <TableWidget />
        </Box>
        <Box
          sx={{
            gridColumn: "span 6 / span 12",
          }}
        >
          <BlogWidget />
        </Box>
        <Box
          sx={{
            gridColumn: "span 4 / span 12",
          }}
        >
          <NewsList />
        </Box>
        <Box
          sx={{
            gridColumn: "span 4 / span 12",
          }}
        >
          <RadarChart />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height:"100%",
            justifyContent:"space-between",
            gridColumn: "span 4 / span 12",
          }}
        >
          <CartSummery2 type={1} />
          <CartSummery2 />
          <CartSummery2 type={1} />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
