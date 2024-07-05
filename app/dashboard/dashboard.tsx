import { Grid } from '@mui/material';
import { Link, Typography } from '@mui/material';

import Chart from './chart';
// チャートコンポーネント
import Deposit from './deposit';
// デポジットコンポーネント
import Order from './order';
// オーダーコンポーネント
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  return (
    <div className="mx-auto custom:w-custom">
      <div>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={8} lg={9} spacing={2}>
            <Chart data={chart.data} />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Deposit data={deposit.data} />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid sx={{ marginBottom: 3 }}>
          <Order data={order.data} />
        </Grid>
      </div>
      <Typography sx={{ fontSize: 15, opacity: 0.7, textAlign: 'center' }}>
        Copyright © <Link sx={{ textDecoration: 'underline', color: 'inherit' }}>Your Website</Link> 2024.
      </Typography>
    </div>
  );
}
