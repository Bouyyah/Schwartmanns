import { Paper, Typography, Divider } from '@mui/material';
import {useUserDistributionByType} from '../api/queries';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const UsersTypePie = () => {
    const { data, isLoading} = useUserDistributionByType();

    const chartData = {
        labels: ['User', 'Admin'],
        datasets: [
          {
            label: '# of users',
            data: [data?.User, data?.Admin],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
 
 if(data)   return (
    <Paper sx={{p:2,height:'fit-content'}}>
        <Typography variant='subtitle1' gutterBottom>
            User type pie chart:
          </Typography>
          <Divider sx={{mb:2}}/>
     <Pie data={chartData} />
    </Paper>
  )
}

export default UsersTypePie