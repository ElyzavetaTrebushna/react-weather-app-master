import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
         This project was coded by Elyzaveta Trebushna
          and is{" "}
          <a
            href="https://github.com/ElyzavetaTrebushna/react-weather-app-master"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
