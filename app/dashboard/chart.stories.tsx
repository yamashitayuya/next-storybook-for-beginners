import { Meta, StoryObj } from '@storybook/react';

import Component from './chart';

const meta = {
  title: 'dashboard/Chart',
  component: Component,
  args: {
    data: [
      { time: '00:00', amount: 0 },
      { time: '03:00', amount: 200 },
      { time: '06:00', amount: 600 },
      { time: '09:00', amount: 800 },
      { time: '12:00', amount: 1500 },
      { time: '15:00', amount: 2000 },
      { time: '18:00', amount: 2400 },
      { time: '21:00', amount: 2400 },
      { time: '24:00', amount: 2500 },
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

export const Chart: StoryObj<typeof meta> = {};
