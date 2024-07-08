import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Dashboard from './dashboard';
import { ChartData, DepositData, OrderData } from './types';

export default async function Page() {
  const chart = await getChartData();
  const deposit = await getDepositData();
  const order = await getOrderData();
  console.log(chart);
  return <Dashboard chart={chart} deposit={deposit} order={order} />;
}

/**
 * チャートデータの取得
 */
async function getChartData() {
  return await api<ChartData>('dashboard/chart');
  // const result = await api<{ data: { amount: number[] } }>('dashboard/chart');
  // return {
  //   data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'].map((time, index) => ({
  //     time,
  //     amount: result.data.amount[index] ?? 0,
  //   })),
  // };
}

/**
 * 売上情報の取得
 */

// 売上情報を取得する
async function getDepositData() {
  return await api<DepositData>('dashboard/deposit');
}

async function getOrderData() {
  return await api<OrderData>('dashboard/order');
}
