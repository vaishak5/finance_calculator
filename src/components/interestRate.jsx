import React, { useState } from "react";

const InterestRate = ({
  interestRate,
  handleInterestInputChange,
  handleInterestSliderChange,
}) => {
  const sliderMax = 30;
  const sliderMin = 1;

  const sliderPosition =
    ((interestRate - sliderMin) / (sliderMax - sliderMin)) * 100;
  const [input, setInput] = useState(interestRate.toString());
  const [error, setError] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      if (value === "") {
        setInput(input);
        handleInterestInputChange(value);
      } else {
        const numericValue = parseFloat(value);
        setInput(value);

        if (numericValue < sliderMin && numericValue !== input) {
          setError(`Minimum value should be ${sliderMin}%`);
        } else if (numericValue > sliderMax) {
          setError(`Maximum value should be  ${sliderMax}%`);
          handleInterestSliderChange(sliderMax);
        } else {
          setError("");
          handleInterestInputChange(numericValue);
        }
      }
    }
  };
  const handleSlider = (e) => {
    const value = Number(e.target.value);
    setInput(value.toString());
    setError("");
    handleInterestSliderChange(value);
  };
  return (
    <div>
      <div style={{ position: "relative" }} className="col-12">
        <label
          style={{
            color: "#34495e",
            fontWeight: "bold",
            paddingBottom: ".25rem",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Interest Rate
        </label>
        <div style={{ }}>
          <input
            type="text"
            maxLength={4}
            value={input}
            className="col-12"
            onChange={handleInput}
            style={{
              padding: "8px",
              paddingRight: "30px",
              outline: "none",
              
               border:'1px solid #cbd5e1',
               borderRadius:'5px'
            }}
          />
          {/* <span
            style={{
              position: "absolute",
              top: "65%",
              right: "10px",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "black",
            }}
          >
            %
          </span> */}
        </div>
      </div>
      {error && (
        <div style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
          {error}
        </div>
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
        min={sliderMin}
        max={sliderMax}
        step="0.1"
        value={interestRate}
        onChange={handleSlider}
        style={{ width: "100%", cursor: "pointer", outline: "none" }}
      />
    </div>
  );
};

export default InterestRate;
