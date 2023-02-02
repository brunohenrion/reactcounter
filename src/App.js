import "./App.css";
import logo from "./img/logo.svg";
import carre from "./img/carre.svg";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

const App = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <header>
        <img src={logo} alt="" />
        <h1>React Counter</h1>
      </header>
      <main>
        <div>
          {/* <button
            className="minus"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button> */}
          <Decrement counter={counter} setCounter={setCounter} />

          <img className="carre" src={carre} alt="" />
          <p className="result"> {counter}</p>
          {/* <button
            className="plus"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
               
          </button> */}
          <Increment counter={counter} setCounter={setCounter} />
        </div>
        {/* 
        <div
          className="reset"
          onClick={() => {
            setCounter(0);
          }}
        >
          <button className="text">Reset</button>
        </div> */}
        <Reset counter={counter} setCounter={setCounter} />
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by
          <span> Brice</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
