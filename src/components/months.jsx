import React, { useState } from "react";

const Month = ({ monthDuration, handleMonthDuration, handleSliderMonth }) => {
  const sliderMax = 60;
  const sliderMin = 12;

  const sliderPosition =
    ((monthDuration - sliderMin) / (sliderMax - sliderMin)) * 100;
  const [input, setInput] = useState(monthDuration.toString());
  const [error, setError] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (value === "") {
        setInput(input);
        handleMonthDuration(value);
      } else {
        setInput(value);
        const numericValue = parseInt(value);

        if (numericValue < sliderMin && numericValue != input) {
          setError(`Minimum value should be ${sliderMin} months`);
        } else if (numericValue > sliderMax) {
          setError(`Maximum value should be  ${sliderMax} months`);
          handleMonthDuration(sliderMax);
        } else {
          setError("");
          handleMonthDuration(numericValue);
        }
      }
    }
  };
  const handleSlider = (e) => {
    const value = Number(e.target.value);
    setInput(value.toString());
    setError("");
    handleSliderMonth(value);
  };

  return (
    <div>
      <div style={{ position: "relative", marginBottom: "20px" }} className="col-12">
        <label
          style={{
            color: "#34495e",
            fontWeight: "bold",
            paddingBottom: ".25rem",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Loan Tenure
        </label>
        <div style={{  }}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            maxLength={3}
            className="col-12"
            style={{
              padding: "8px",
              paddingRight: "35px",
              outline: "none",
             
              border:'1px solid #cbd5e1',
              borderRadius:'5px'
            }}
          />
          {/* <span
            style={{
              position: "absolute",
              top: "65%",
              right: "5px",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "black",
            }}
          >
            Months
          </span> */}
        </div>
      </div>
      {error && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
          {error}
        </p>
      )}
      <div
        style={{ position: "relative", height: "20px", marginBottom: "10px" }}
      >
        <span
          style={{
            top: "4px",
            left: `calc(${sliderPosition}% - 0px`,
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
        step="1"
        value={monthDuration}
        onChange={handleSlider}
        style={{ width: "100%", cursor: "pointer", outline: "none" }}
      />
    </div>
  );
};

export default Month;
