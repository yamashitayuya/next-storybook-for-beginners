'use client';

import { Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';

import './chart.css';
import { ChartData } from './types';

export default function Chart({ data }: Readonly<ChartData>) {
  return (
    <Paper className="flex h-48 p-2">
      {/* Title */}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Today
      </Typography>
      <div className="chart-label w-full flex-grow overflow-hidden">
        <LineChart
          dataset={data}
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
