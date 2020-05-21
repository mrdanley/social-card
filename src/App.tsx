import React from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="app__background">
      <div className="app__center-strip">
        <Card key="1" />
        <Card key="2" />
        <Card key="3" />
        <Card key="4" />
      </div>
    </div>
  );
}

export default App;
