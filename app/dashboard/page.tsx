import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Dashboard from './dashboard';

export default async function Page() {
  const chart = await getChartData();
  const deposit = await getDepositData();
  const order = await getOrderData();
  return <Dashboard chart={chart} deposit={deposit} order={order} />;
}

/**
 * チャートデータの取得
 */
async function getChartData() {
  const result = await api<{ data: { amount: number[] } }>('dashboard/chart');
  return await Promise.resolve({
    data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'].map((time, index) => ({
      time,
      amount: result.data.amount[index] ?? 0,
    })),
  });
}

/**
 * 売上情報の取得
 */
async function getDepositData() {
  return await api<ComponentProps<typeof Dashboard>['deposit']>('/dashboard/deposit');
}

/**
 * 受注データの取得
 */
async function getOrderData() {
  return await api<ComponentProps<typeof Dashboard>['order']>('/dashboard/order');
}
