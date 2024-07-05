'use client';

import { Paper, Typography } from '@mui/material';
import Link from '@mui/material/Link';

import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  // 日付を05 Jul, 2024のフォーマットに変換する
  function formatDateForDeposit(inputDate: string) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    return `on ${day} ${months[monthIndex]}, ${year}`;
  }
  // US表記に変換
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(data.amount);
  return (
    <Paper className="flex h-60 flex-col justify-between p-4">
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      <div className="chart-label w-full flex-grow overflow-hidden">
        <div className="text-custom">{formattedAmount}</div>
        <div className="text-base text-gray-500">{formatDateForDeposit(data.date)}</div>
      </div>
      <Link color="primary" href="#" style={{ marginTop: 'auto' }}>
        View balance
      </Link>
    </Paper>
  );
}
