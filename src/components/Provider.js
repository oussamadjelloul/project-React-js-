import React, { useState, useContext } from "react";

const Login = React.createContext();
const Togglebt = React.createContext();

export function Loging() {
  return useContext(Login);
}
export function Butting() {
  return useContext(Togglebt);
}
const Provider = ({ children }) => {
  const [lg, setLg] = useState(true);

  function fnlogin() {
    setLg(!lg);
  }
  return (
    <Login.Provider value={lg}>
      <Togglebt.Provider value={fnlogin}>{children}</Togglebt.Provider>
    </Login.Provider>
  );
};

export default Provider;
