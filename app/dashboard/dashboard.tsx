import { ChartData, DepositData, OrderData } from './types';

export default function Dashboard({
  chart,
  deposit,
  order,
}: Readonly<{ chart: ChartData; deposit: DepositData; order: OrderData }>) {
  // propsとして渡す
  console.log(chart, deposit, order);
  return (
    <div>
      <div>
        {/* chart  */} {/* deposits */}
      </div>
      <div>{/* recent orders */}</div>
    </div>
  );
}
