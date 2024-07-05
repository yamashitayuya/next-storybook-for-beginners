import { Grid } from '@mui/material';
import { Link, Typography } from '@mui/material';

import Chart from './chart';
import Deposit from './deposit';
import Order from './order';
import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  // useEffect(() => {
  //   console.log('Chart data:', chart.data);
  // }, [chart.data]);
  console.log(chart);
  return (
    <div>
      <div>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={8} spacing={2}>
            <Chart data={chart.data} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Deposit data={deposit.data} />
          </Grid>
        </Grid>
        {/* chart  */} {/* deposits */}
      </div>
      <div>
        <Grid sx={{ marginBottom: 3 }}>
          <Order data={order.data} />
        </Grid>
      </div>
      <Typography sx={{ fontSize: 15, opacity: 0.7, textAlign: 'center' }}>
        Copyright © <Link>Your Website</Link> 2024.
      </Typography>
    </div>
  );
}

//export default withClient(Dashboard);
