import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          This project was coded by{" "}
          <a href="https://gilded-cat-2aaba1.netlify.app">Denise Tobias</a> and
          is {""}
          <a
            href="https://github.com/dtobias05/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
