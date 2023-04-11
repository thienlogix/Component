import React from "react";
import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import ProductPage from "./DemoCallback/ProductPage";
import Performance from "./Performance";

function App() {
  return (
    <div className="App">
      <ProductPage />
      {/* <Performance /> */}
    </div>
  );
}

export default App;
