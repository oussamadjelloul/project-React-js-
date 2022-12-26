import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import Header from "./Header";
import { Butting } from "./Provider";

const Login = () => {
  //TODO  update my container
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const btn = Butting();
  const login = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    Navigate("/");
    btn();
  };

  return (
    <>
      <Header />
     
        <div id="form">
          <div>
            <fieldset>
              <div className="input">
                <input
                  type="email"
                  placeholder="write your name "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  required
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="write your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  required
                />
              </div>
            </fieldset>
          </div>
          <div>
            <button id='btnL' onClick={login}> login</button>
          </div>
        </div>
      
    </>
  );
};

export default Login;
