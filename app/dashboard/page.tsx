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
function formatDateForDeposit(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getDate();
  return `on ${day} ${months[monthIndex]}, ${year}`;
}

async function getDepositData() {
  const result = await api<{ data: { amount: number; date: string } }>('dashboard/deposit');
  console.log('aaaaaaaaaaaa');
  return await Promise.resolve({
    data: {
      amount: result.data.amount,
      date: formatDateForDeposit(result.data.date),
    },
  });
  //return await api<ComponentProps<typeof Dashboard>['deposit']>('/dashboard/deposit');
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

  //console.log(Array.isArray(result.data));
  return await Promise.resolve({
    data: result.data.map((item: any) => {
      return {
        id: item.id,
        date: formatDateForOrder(item.date),
        name: item.name,
        shipTo: item.shipTo,
        paymentMethod: item.paymentMethod,
        amount: item.amount,
      };
    }),
    //data: [
    // {
    // id: 1,
    // date: "on 15 March, 2019",
    // name: "Elvis Presley",
    // shipTo: "Tupelo, MS",
    // paymentMethod: "VISA ⠀•••• 3719",
    // amount: 312.44,
    // },
    // {
    //   id: 2,
    //   date: "on 15 March, 2019",
    //   name: "Paul McCartney",
    //   shipTo: "London, UK",
    //   paymentMethod: "VISA ⠀•••• 2574",
    //   amount: 866.99,
    // },
    // {
    //   id: 3,
    //   date: "on 15 March, 2019",
    //   name: "Tom Scholz",
    //   shipTo: "Boston, MA",
    //   paymentMethod: "MC ⠀•••• 1253",
    //   amount: 100.81,
    // },
    // {
    //   id: 4,
    //   date: "on 15 March, 2019",
    //   name: "Michael Jackson",
    //   shipTo: "Gary, IN",
    //   paymentMethod: "AMEX ⠀•••• 2000",
    //   amount: 654.39,
    // },
    // {
    //   id: 5,
    //   date: "on 15 March, 2019",
    //   name: "Bruce Springsteen",
    //   shipTo: "Long Branch, NJ",
    //   paymentMethod: "VISA ⠀•••• 5919",
    //   amount: 212.79,
    // }
    //],
  });
  //return await api<ComponentProps<typeof Dashboard>['order']>('/dashboard/order');
}
