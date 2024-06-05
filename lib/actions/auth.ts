'use server';

import { parseWithZod } from '@conform-to/zod';
import { revalidatePath } from 'next/cache';
import { RedirectType, redirect } from 'next/navigation';

import { validation } from 'lib/validations/auth';

/**
 * ログアウト
 */
export async function logoutAction() {
  await Promise.resolve('logout');
  console.log('logout');

  revalidatePath('/');
  redirect('/auth/login', RedirectType.replace);
}

/**
 * ログイン
 */
export async function loginAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: validation });
  if (submission.status !== 'success') {
    return submission.reply();
  }
  const { email, password } = submission.value;

  await Promise.resolve('login');
  console.log('login', email, password);

  revalidatePath('/');
  redirect('/', RedirectType.replace);
}

/**
 * 登録
 */
export async function registerAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: validation });
  if (submission.status !== 'success') {
    return submission.reply();
  }
  const { email, password } = submission.value;

  await Promise.resolve('register');
  console.log('register', email, password);

  revalidatePath('/');
  redirect('/auth/register?register=ok', RedirectType.replace);
}
