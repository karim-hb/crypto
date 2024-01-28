import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend); /* ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
 */
/* export const data = {
  labels: ["E 1", "E 2", "E 3", "E 4", "E 5"],
  datasets: [
    {
      label: "# of Votes",
      data: [7, 9, 6, 5, 8],
      borderColor: "rgb(250, 250, 250)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)", // Point color
      pointBorderColor: "#fff", // Point border color
      pointHoverBackgroundColor: "#fff", // Point hover color
      pointHoverBorderColor: "rgba(255, 99, 132, 1)", // Point hover border color

      backgroundColor: (ctx: any) => {
        const gradient = ctx.chart.canvas
          .getContext("2d")
          .createLinearGradient(440, 0, 0, 200);
        gradient.addColorStop(0, "#31e1f7");
        gradient.addColorStop(1, "#aa3fff");

        return gradient;
      },
      borderWidth: 1,
    },
  ],
};
export const options = {
  responsive: true,
  scales: {
    r: {
      grid: {
        color: "#1C1B1F", // Set the grid color for the radar chart
      },
      angleLines: {
        color: "#1C1B1F", // Set the color of the radar spokes (angle lines)
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
}; */

const RadarChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: { md: 3, xs: 2 },
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
        <Typography variant="subtitle2">Package Status </Typography>
        {/*         <Typography variant="caption">Subtitle here</Typography>
         */}{" "}
      </Box>
      {/*       <Radar data={data} options={options} />


 */}{" "}
      <Box sx={{ display: "flex", position: "relative" , maxWidth:"200px" , m:'auto' }}>
        {" "}
        <Doughnut data={data} options={options} />
        <Box sx={{position:"absolute" , right:"50%" , top:"50%" , transform:"translate(50%,-50%)" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
          <Box sx={{color:"#2fbfb2" , fontSize:"35px"}}>127/365</Box>
          <Box sx={{color:"#2fbfb2" , fontSize:"15px"}}>Auto Trade</Box>

        </Box>
      </Box>
    </Box>
  );
};
var options = {
  cutoutPercentage: 20,
  cutout: 90,
};
export default RadarChart;
export const data = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [365, 127],
      backgroundColor: ["#2fbfb2", "#1C1B1F"],
      borderColor: ["#2fbfb2", "#1C1B1F"],
      borderWidth: 0,
    },
  ],
};
