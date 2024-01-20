import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        color: '#000', // Set the x-axis grid color
      },
   /*    ticks:{
        color: '#1C1B1F',
      } */
    },
    y: {
      grid: {
        color: '#1C1B1F', // Set the y-axis grid color
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
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [3, 44, 32, 52, 3, 33],
      borderColor: "rgb(250, 250, 250)",
      backgroundColor: (ctx: any) => {
        const gradient = ctx.chart.canvas
          .getContext("2d")
          .createLinearGradient(440, 0, 0, 200);
        gradient.addColorStop(0, "#31e1f7");
        gradient.addColorStop(1, "#aa3fff");

        return gradient;
      },
    },
  ],
};

const AreaChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        p: {md:3 , xs:2},
        bgcolor: "background.default",
        borderRadius: "2px",
        gap: 2,
        flexDirection: "column",
   /*      height:"100%" */
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" , borderBottom:"1px solid #1C1B1F" , mb:1,pb:1 }}>
        <Typography variant="subtitle2">Trading Statement Chart</Typography>
      </Box>
      <Line options={options} data={data} width={300} />
    </Box>
  );
};

export default AreaChart;
