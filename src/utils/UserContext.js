import { createContext } from "react";

const UserContext = createContext({
  userinfo: {
    username: "Ramesh",
    useremail: "pratham-tech@gmail.com",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;


