export interface ChartData {
  data: { time: string; amount: number }[];
}

export interface DepositData {
  data: {
    amount: number;
    date: string;
  };
}

export interface OrderData {
  data: {
    id: number;
    date: string;
    name: string;
    shipTo: string;
    paymentMethod: string;
    amount: number;
  }[];
}
