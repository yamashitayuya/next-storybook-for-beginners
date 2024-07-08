import { Meta, StoryObj } from '@storybook/react';

import Component from './order';

const meta = {
  title: 'dashboard/Order',
  component: Component,
  args: {
    // デモデータ
    data: [
      {
        id: 1,
        date: '2021-01-01',
        name: 'Donut',
        shipTo: 'Iraq',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
      },
      {
        id: 2,
        date: '2021-01-01',
        name: 'Ice Cream',
        shipTo: 'Uruguay',
        paymentMethod: 'VISA ⠀•••• 2574',
        amount: 866.99,
      },
      {
        id: 3,
        date: '2021-01-01',
        name: 'Eclair',
        shipTo: 'Belgium',
        paymentMethod: 'MC ⠀•••• 1253',
        amount: 100.81,
      },
      {
        id: 4,
        date: '2021-01-01',
        name: 'Cupcake',
        shipTo: 'Poland',
        paymentMethod: 'AMEX ⠀•••• 2000',
        amount: 654.39,
      },
      {
        id: 5,
        date: '2021-01-01',
        name: 'Gingerbread',
        shipTo: 'argentina',
        paymentMethod: 'VISA ⠀•••• 5919',
        amount: 212.79,
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;
export const Order: StoryObj<typeof meta> = {};
