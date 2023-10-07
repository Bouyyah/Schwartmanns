import { useCirclesPerSheet, useLinesPerSheet } from "../api/queries";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import { Paper } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Circles and lines per sheet",
    },
  },
};

const CirclesAndLinesPerSheet = () => {
  const { data: circles } = useCirclesPerSheet();
  const { data: lines } = useLinesPerSheet();

  const labels = useMemo(() => circles ? Object.keys(circles):[], [circles]);
  const circlesCach = useMemo(() => circles? Object.values(circles):[], [circles]);
  const linesCach = useMemo(() => lines ? Object.values(lines): [], [lines]);

  const data = {
    labels,
    datasets: [
      {
        label: "Circles",
        data: circlesCach,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Lines",
        data: linesCach,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if(circles && lines) return (
    <div>
      <Paper sx={{ p: 2, width:'90%', display:'flex', justifyContent:'center' }}>
        <Bar options={options} data={data} />
      </Paper>
    </div>
  );
};

export default CirclesAndLinesPerSheet;
