import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Tea.css";
import Header from "./Header";
const Team = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://myjson.dit.upm.es/api/bins/iwkm")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  if (error) {
    return (
      <>
        <div>check your connect !</div>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <Header />
        <div id="afterAnim">
          <div className="animation">
            <div id="blockanim">
              <div className="anim"></div>
              <div className="anim"></div>
              <div className="anim"></div>
            </div>
            <div>
              <p id="loading">Loading ...</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div id="team">
        {data.map((dat) => {
          return (
            <div className="cart">
              <div className="name">
                <h1>{dat.name}</h1>
              </div>
              <div className="job">
                <h3>{dat.job}</h3>
              </div>
              <div className="skills">
                <p>
                  {dat.skils.map((e) => {
                    return e + " | ";
                  })}
                </p>
              </div>
              <div className="imges">
                <img src={dat.url} alt="photo" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Team;
