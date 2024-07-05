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
// 日付を05 Jul, 2024のフォーマットに変換する
function formatDateForDeposit(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  return `on ${day} ${months[monthIndex]}, ${year}`;
}
// 売上情報を取得する
async function getDepositData() {
  const result = await api<{ data: { amount: number; date: string } }>('dashboard/deposit');
  return {
    data: {
      amount: result.data.amount,
      date: formatDateForDeposit(result.data.date),
    },
  };
}

/**
 * 受注データの取得
 */
function formatDateForOrder(inputDate: string) {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月は0から始まるため、+1する
  const day = ('0' + date.getDate()).slice(-2);

  // 月の表記を変換するための配列
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formattedDate = `${day} ${months[date.getMonth()]}, ${year} `;
  return formattedDate;
}

async function getOrderData() {
  const result = await api<{
    data: { id: number; date: string; name: string; shipTo: String; payMentMethod: String; amount: number }[];
  }>('dashboard/order');

  return {
    data: result.data.map((item: any) => {
      return {
        ...item,
        date: formatDateForOrder(item.date),
      };
    }),
  };
}
