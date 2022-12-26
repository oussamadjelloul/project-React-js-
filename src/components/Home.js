import React from "react";
import User from "./User";
import "../style/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />

      <div id="home">
        <div id="content">
          <div id="text">
            hello this is my work , i guess this is good work by react js
          </div>
          <div id="image">
            <img src="https://picsum.photos/200/300" alt="images" />
          </div>
        </div>
        <User />
      </div>
    </>
  );
};

export default Home;
