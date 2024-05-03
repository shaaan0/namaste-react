import { createContext } from "react";

const LoginContext = createContext({
  loggedInUser: "logout",
});

export default LoginContext;
