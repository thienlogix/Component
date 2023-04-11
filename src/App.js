import React from "react";
import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}

export default App;
