import React, { useState } from "react";

const LoanAmount = ({
  loanAmount,
  handleLoanInputChange,
  handleLoanSliderChange,
}) => {
  const sliderMax = 3000000;
  const sliderMin = 10000;
  const sliderPosition = (loanAmount / sliderMax) * 100;
  const [rawInput, setRawInput] = useState(loanAmount.toString());
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(value)) {
      if (value === "") {
        setRawInput(rawInput);
        handleLoanInputChange(value);
      } else {
        const numericValue = parseInt(value, 10);
        setRawInput(value);

        if (numericValue > sliderMax) {
          setError(
            `Maximum value should be ₹${sliderMax.toLocaleString("en-IN")}`
          );
          handleLoanInputChange(sliderMax);
        } else if (numericValue < sliderMin && numericValue !== rawInput) {
          setError(
            `Minimum value should be ₹${sliderMin.toLocaleString("en-IN")}`
          );
        } else {
          setError("");
          handleLoanInputChange(numericValue);
        }
      }
    }
  };

  const handleSliderChange = (e) => {
    const sliderValue = Number(e.target.value);
    setRawInput(sliderValue.toString());
    setError("");
    handleLoanSliderChange(sliderValue);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }} className="col-12">
        <label
          style={{
            color: "#34495e",
            fontWeight: "bold",
            paddingBottom: ".25rem",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}
        >
          Loan Amount
        </label>

        {/* Input Field */}
        <input
          type="text"
          maxLength={8}
          className="col-12"
          value={rawInput}
          onChange={handleInputChange}
          style={{
            marginBottom: "10px",
            padding: "8px",
            paddingRight: "30px",
            outline: "none",
            
             border:'1px solid #cbd5e1',
             borderRadius:'5px'
          }}
        />

        {/* Display Validation Error */}
        {error && (
          <div style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
            {error}
          </div>
        )}

        {/* Slider Display Value */}
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
            {rawInput.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min={sliderMin}
          max={sliderMax}
          step="1000"
          value={loanAmount}
          onChange={handleSliderChange}
          style={{ width: "100%", cursor: "pointer", outline: "none" }}
        />
      </div>
    </div>
  );
};

export default LoanAmount;
