import React, { useReducer, useState } from "react";
import Header from "./Header";
import "../style/Who.css";

const Action = {
  Done: "done",
  Entre: "entre",
  Remove: "remove",
};

function reducer(todo, action) {
  switch (action.type) {
    case Action.Entre:
      return [...todo, NewTask(action.data)];
    case Action.Done:
      return todo.map((tod) => {
        if (tod.id === action.id) {
          return { ...tod, complet: true };
        }
        return tod;
      });

    case Action.Remove:
      Remv(action.id);
      return todo.filter((element) => {
        if (element.id !== action.id) return element;
      });
  }
}
function Remv(id) {

  let arayLocalS = JSON.parse(localStorage.getItem("todo"));
  let arrayNew = arayLocalS.filter((el) => {
    if (el.id !== id) {
      return el;
    }
  });
  localStorage.setItem("todo", JSON.stringify(arrayNew));
}


function NewTask(data) {
  return { data: data, id: Date.now(), complet: false };
}

const Who = () => {
  const [data, setData] = useState("");
  const ara = JSON.parse(localStorage.getItem("todo"));

  const [todo, dispatch] = useReducer(reducer, ara || []);
  const handling = (e) => {
    e.preventDefault();
    // error of data not exist  .
    try {
      if (data != "") {
        dispatch({ type: "entre", data: data });
        setData("");
      } else {
        console.log("ous");
        throw "";
      }
    } catch {
      document.getElementById("toDo").classList.add("errr");
      setTimeout(() => {
        document.getElementById("toDo").classList.remove("errr");
        console.log("remove class");
      }, 3000);
    }
  };

  const saveLoc = () => {
    let arayLocalS = [];

    if (localStorage.getItem("todo")) {
      arayLocalS = JSON.parse(localStorage.getItem("todo"));
      let todNoreput = todo.filter((el) => {
        let b = true;
        for (let i = 0; i < arayLocalS.length; i++) {
          if (arayLocalS[i].data == el.data) {
            b = false;
          }
        }
        if (b) return el;
      });
      localStorage.setItem(
        "todo",
        JSON.stringify([...arayLocalS, ...todNoreput])
      );
    } else {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  };
  return (
    <>
      <Header />
      <div className="title">
        <h1>this my to do list </h1>
      </div>
      <div id="toDo" className="">
        <form id="formd" onSubmit={handling}>
          <input
            id="inputT"
            type="text"
            name="title"
            placeholder="write your work"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <input type="submit" value="Entre" />
        </form>
      </div>
      <div id="tasks" counter={todo.length} >
        <div >
          {todo.map((element) => {
            return (
              <div className={`task ${element.complet}`} key={element.id}>
                <div className="titleTask">
                  <h4>{element.data}</h4>
                </div>
                <div className="butunTaks">
                  <button
                    onClick={() => {
                      dispatch({ type: "done", id: element.id });
                    }}
                  >
                    Done
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "remove", id: element.id });
                    }}
                  >
                    Romve
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="local">
        <button
          onClick={() => {
            saveLoc();
          }}
        >
          save in local storage
        </button>
      </div>
    </>
  );
};

export default Who;
