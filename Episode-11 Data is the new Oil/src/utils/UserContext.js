import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

console.log("Inside UserContext: ", UserContext);
export default UserContext;
