'use client';

import { Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';

import './chart.css';
import { ChartData } from './types';

export default function Chart({ data }: Readonly<ChartData>) {
  console.log('___________________________________________________');
  console.log(data);
  return (
    <Paper className="h-60 p-4">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Today
      </Typography>
      <div
        className="chart-label chart-container h-40 w-full flex-grow overflow-hidden"
        style={{ width: '100%', minWidth: '0' }}
      >
        <LineChart
          dataset={['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'].map(
            (time, index) => ({
              time,
              amount: data.amount[index] ?? 0,
            }),
          )}
          margin={{ top: 16, right: 20, left: 70, bottom: 30 }}
          xAxis={[{ scaleType: 'point', dataKey: 'time', tickNumber: 2 }]}
          yAxis={[
            {
              label: 'Sales ($)',
              labelStyle: { fontSize: 16 },
              max: 2500,
              tickNumber: 3,
            },
          ]}
          series={[{ dataKey: 'amount', showMark: false }]}
        />
      </div>
    </Paper>
  );
}
