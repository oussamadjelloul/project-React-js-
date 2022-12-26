import React, { useState } from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import ButtonT from "./ButtonTest";

// funtoin

function Header() {
  const [navbar, setNavbar] = useState(false);
  const clicking = () => {
    setNavbar(true);
  };

  return (
    <>
      <header>
        <navbar id="navbarDesk">
          <button id="bar" onClick={clicking}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <nav className="navbar">
            <div>
              <ButtonT id="sign" />
            </div>
            <div>
              <ul className="uling">
                <li>
                  <NavLink to="/">Home Page</NavLink>
                </li>
                <li>
                  <NavLink to="/Who"> To Do</NavLink>
                </li>
                <li>
                  <NavLink to="/Team">Teams</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <div id="logo">
            <h2>OUSSAMA</h2>
          </div>
        </navbar>
        {navbar && (
          <>
            <navbar id="navPhon">
              <nav className="navbarPho">
                <div>
                  <ButtonT id="signPho" />
                </div>
                <div>
                  <ul className="ulingPho">
                    <li>
                      <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Who"> To Do</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Team">Teams</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </navbar>
            <div id="close">
              <button
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
