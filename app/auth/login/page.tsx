import { loginAction } from "lib/actions/auth";

import Login from "./login";

export default function Page() {
  return <Login onSubmit={loginAction} />;
}
