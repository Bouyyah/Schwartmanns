import { useMemo } from "react";
import { useProjectDistributionByClient } from "../api/queries";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { Paper, Typography, Divider } from "@mui/material";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ProjectByClientChart = () => {
  const { data } = useProjectDistributionByClient();
  const dataValuesMemo = useMemo(
    () => (data ? Object.values(data) : []),
    [data]
  );
  const dataKeysMemo = useMemo(() => (data ? Object.keys(data) : []), [data]);

  const projectbyClient = {
    labels: dataKeysMemo,
    datasets: [
      {
        label: "# of Projects",
        data: dataValuesMemo,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "#064287",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (data)
    return (
      <div>
        <Paper sx={{ p: 2, height: "fit-content" }}>
          <Typography variant='subtitle1' gutterBottom>
            Projects by client polarArea chart:
          </Typography>
          <Divider sx={{mb:2}}/>
          <PolarArea data={projectbyClient} />
        </Paper>
      </div>
    );
};

export default ProjectByClientChart;
