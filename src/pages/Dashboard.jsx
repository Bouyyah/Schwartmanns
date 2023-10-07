import { Paper, Typography, Divider, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

import UsersTypePie from "../components/UsersTypePie";
import CirclesAndLinesPerSheet from "../components/CirclesAndLinesPerSheet";
import ProjectByClientChart from "../components/ProjectByClientChart";
import ProjectByUser from "../components/ProjectByUser";

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ mt:'50em', mb:'4em'}}>
        <StyledPaper elevation={3}>
          <Typography variant='h4' gutterBottom>
            Dashboard
          </Typography>
          <Divider />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <UsersTypePie />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <ProjectByClientChart />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <ProjectByUser />
            </Grid>

            <Grid item xs={12}>
              <CirclesAndLinesPerSheet />
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </div>
  );
};

export default Dashboard;
