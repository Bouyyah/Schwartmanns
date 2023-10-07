import { useMemo } from "react";
import { Paper, Typography, Divider } from "@mui/material";

import { useProjectDistributionByUser } from "../api/queries";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ProjectByUser = () => {
  const { data } = useProjectDistributionByUser();
  const dataValuesMemo = useMemo(
    () => (data ? Object.values(data) : []),
    [data]
  );
  const dataKeysMemo = useMemo(() => (data ? Object.keys(data) : []), [data]);

  const projectbyUser = {
    labels: dataKeysMemo,
    datasets: [
      {
        label: "# of Users",
        data: dataValuesMemo,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (data)
    return (
      <div>
        <Paper sx={{ p: 2, height: "fit-content" }}>
          <Typography variant='subtitle1' gutterBottom>
            Projects by user radar chart:
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Radar data={projectbyUser} />
        </Paper>
      </div>
    );
};

export default ProjectByUser;
