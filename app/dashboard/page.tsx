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
  return await Promise.resolve({
    data: {
      amount: Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString(),
    },
  });
}

async function getOrderData() {
  return await Promise.resolve({
    data: [
      {
        id: 1,
        date: new Date().toLocaleDateString(),
        amount: Math.floor(Math.random() * 1000),
        shipTo: "Tupelo, MS",
        paymentMethod: "VISA •••• 3719",
        name: "Elvis Presley",
      },
      {
        id: 2,
        date: new Date().toLocaleDateString(),
        amount: Math.floor(Math.random() * 1000),
        shipTo: "San Jose, CA",
        paymentMethod: "VISA •••• 2574",
        name: "Paul McCartney",
      },
      {
        id: 3,
        date: new Date().toLocaleDateString(),
        amount: Math.floor(Math.random() * 1000),
        shipTo: "Edinburgh, UK",
        paymentMethod: "VISA •••• 7465",
        name: "Tom Scholz",
      },
      {
        id: 4,
        date: new Date().toLocaleDateString(),
        amount: Math.floor(Math.random() * 1000),
        shipTo: "London, UK",
        paymentMethod: "VISA •••• 4256",
        name: "Michael Jackson",
      },
      {
        id: 5,
        date: new Date().toLocaleDateString(),
        amount: Math.floor(Math.random() * 1000),
        shipTo: "Johannesburg, SA",
        paymentMethod: "VISA •••• 3245",
        name: "Bruce Springsteen",
      },
    ],
  });
}
