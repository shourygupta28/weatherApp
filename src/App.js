import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.github.com/shourygupta28">
          Github Profile
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://shourygupta28.github.io/My-React-Portfolio/">
          Shourya Gupta
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
