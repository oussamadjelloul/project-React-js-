import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loging } from "./Provider";
import { Butting } from "./Provider";

const ButtonT = ({ id }) => {
  const login = Loging();
  const btn = Butting();

  const navigate = useNavigate();
  const log = () => {
    if (!login) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      btn();
    } else {
      navigate("/login");
    }
  };

  if (!login) {
    return (
      <button id={id} onClick={log}>
        logout
      </button>
    );
  } else
    return (
      <button id={id} onClick={log}>
        Login
      </button>
    );
};
export default ButtonT;
