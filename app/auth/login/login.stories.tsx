import { SubmissionResult } from '@conform-to/react';
import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import Login from './login';

const meta = {
  title: 'auth/Login',
  component: Login,
  args: {
    onSubmit: fn(),
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Login>;
export default meta;

export const Main: StoryObj<typeof meta> = {};

export const Error: StoryObj<typeof meta> = {
  args: {
    onSubmit: fn((_, formData) => {
      'use server';
      const result: SubmissionResult = {
        initialValue: Object.fromEntries(formData.entries()),
        status: 'error',
        error: { '': ['メールアドレスかパスワードに誤りがあります'] },
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
    const button = canvas.getByRole('button', { name: /ログイン/i });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);

    // Wait for the error message to appear
    await canvas.findByText(/メールアドレスかパスワードに誤りがあります/);
  },
};
