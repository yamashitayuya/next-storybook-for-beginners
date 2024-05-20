import { ComponentProps } from "react";

import Dashboard from "./dashboard";

export default async function Page() {
  const chart = await getChartData();
  const deposit = await getDepositData();
  const order = await getOrderData();
  return <Dashboard chart={chart} deposit={deposit} order={order} />;
}

async function getChartData() {
  return await Promise.resolve({
    data: [
      "00:00",
      "03:00",
      "06:00",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00",
      "24:00",
    ].map((time) => ({
      time,
      amount: Math.floor(Math.random() * 2500),
    })),
  });
}

async function getDepositData() {
  const result = (
    await fetch("http://127.0.0.1:4010/v1/dashboard/deposit")
  ).json();

  const data = (await result) as ComponentProps<typeof Dashboard>["deposit"];
  return data;
}

async function getOrderData() {
  const result = (
    await fetch("http://127.0.0.1:4010/v1/dashboard/order")
  ).json();

  const data = (await result) as ComponentProps<typeof Dashboard>["order"];
  return data;
}
