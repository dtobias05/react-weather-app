import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div clasName="container">
        <Weather defaultCity="Chicago" />
        <footer>
          This project was coded by Denise Tobias and is {""}
          <a
            href="https://github.com/dtobias05/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
