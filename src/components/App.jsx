import React from "react";
import EMI from "./emiCalculator";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <h1
        style={{
          margin: "0px",
          textAlign: "center",
          color: "#34495e",
          fontSize: "20px",
          fontWeight: "bold",
          padding:'10px'
        }}
      >
        EMI Calculator
      </h1>
      <div style={{}} className="col-12">
        <EMI />
      </div>
    </>
  );
};

export default App;
