import { registerAction } from 'lib/actions/auth';

import Register from './register';

export default function Page({ searchParams: { register } }: { searchParams: { register?: 'ok' } }) {
  return <Register onSubmit={registerAction} registered={register === 'ok'} />;
}
