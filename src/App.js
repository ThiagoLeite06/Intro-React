import React from "react";

import TechList from "./components/TechList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="title-container">
          <h1>Tech List App</h1>
        </div>
        <section>
          <TechList />
        </section>
      </div>
    </div>
  );
}
