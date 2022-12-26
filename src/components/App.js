import "../App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Who from "./who";
import Login from "./Login";
import Provider from "./Provider";

function App() {
  // let controlle = new AbortController();
  // let signal = controlle.signal;

  return (
    <>
      {/* <HellowithState name={'oussama djelloul'} />
        <Child content={'this is my props statless'} />
        <FirstComponent name={'yassine'} />
        <p>oussama djelloul</p>
        <SecondComponent name={'propsDj'} />
        <Clicking />
        <Hover />
        <button onClick={()=>{controlle.abort();}}>abort </button>
        <Api signal={signal} /> */}
      <Provider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/who" element={<Who />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
