import { SubmissionResult } from '@conform-to/react';
import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import Register from './register';

const meta = {
  title: 'auth/Register',
  component: Register,
  args: {
    onSubmit: fn(),
    registered: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Register>;
export default meta;

export const Main: StoryObj<typeof meta> = {};

export const Error: StoryObj<typeof meta> = {
  args: {
    onSubmit: fn((_, formData) => {
      'use server';
      const result: SubmissionResult = {
        initialValue: Object.fromEntries(formData.entries()),
        status: 'error',
        error: { '': ['正常に登録できませんでした'] },
      };
      return Promise.resolve(result);
    }),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/メールアドレス/);
    await expect(emailInput).toBeInTheDocument();
    await userEvent.type(emailInput, 'test@example.com');

    const passwordInput = canvas.getByLabelText(/パスワード/);
    await expect(passwordInput).toBeInTheDocument();
    await userEvent.type(passwordInput, 'password');
    const button = canvas.getByRole('button', { name: /登録/i });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);

    // Wait for the error message to appear
    await canvas.findByText(/正常に登録できませんでした/);
  },
};

export const Registered: StoryObj<typeof meta> = {
  args: {
    registered: true,
  },
};
