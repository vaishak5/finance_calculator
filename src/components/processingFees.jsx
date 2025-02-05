import React, { useState } from "react";

const ProcessingFees = ({ feeAmt, handleInputFee, handleFeeSlider }) => {
  const sliderMax = 99999;
  const sliderPosition = (feeAmt / sliderMax) * 100;
  const [input, setInput] = useState(feeAmt.toString());
  const [error, setError] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (value === "") {
        setInput(input);
        handleInputFee(value);
      } else {
        setInput(value);
        const numericValue = parseInt(value, 10);

        if (numericValue > sliderMax) {
          setError(`Maximum value should be  ₹${sliderMax} `);
          handleInputFee(sliderMax);
        } else {
          setError("");
          handleInputFee(numericValue);
        }
      }
    }
  };
  const handleSlider = (e) => {
    const value = Number(e.target.value);
    setInput(value.toString());
    setError("");
    handleFeeSlider(value);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px", position: "relative" }} className="col-12">
        <label
          style={{
            color: "#34495e",
            fontWeight: "bold",
            paddingBottom: ".25rem",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Processing Fee
        </label>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          maxLength={6}
          className="col-12"
          style={{
            marginBottom: "10px",
            padding: "8px 37px 8px 8px",
            outline: "none",
            
             border:'1px solid #cbd5e1',
             borderRadius:'5px'
          }}
        />
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            {error}
          </p>
        )}
        <div
          style={{ position: "relative", height: "20px", marginBottom: "10px" }}
        >
          <span
            style={{
              position: "absolute",
              top: "4px",
              left: `calc(${sliderPosition}% - 0px)`,
              color: "white",
              background: "rgb(20, 101, 201)",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "bold",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            {input}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="99999"
          step="1"
          value={feeAmt}
          onChange={handleSlider}
          style={{
            width: "100%",
            cursor: "pointer",
            marginTop: "10px",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
};

export default ProcessingFees;
