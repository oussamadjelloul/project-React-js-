import React from "react";
import {Loging} from './Provider'; 
export default function User() {
  const lgs = Loging();
  if (!lgs)
    return <div id="user">{localStorage.getItem("email")}</div>;
  else return <></>;
}
