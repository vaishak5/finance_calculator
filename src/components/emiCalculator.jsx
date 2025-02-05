import React, { useState, useEffect } from "react";
import Loan from "./loanAmount";
import Interest from "./interestRate";
import Month from "./months";
import Fee from "./processingFees";
import Result from "./Result";

const LoanCalculator = () => {
  const [loan, setLoan] = useState(50000);
  const [monthDuration, setMonthDuration] = useState(12);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState("");
  const [totalPayment, setTotalPayment] = useState(0);

  const handleLoanInputChange = (value) => {
    setLoan(Math.max(10000, Math.min(3000000, value)));
  };

  const handleLoanSliderChange = (value) => {
    setLoan(value);
  };
  const handleInterestInputChange = (value) => {
    setInterest(Math.max(1, Math.min(30, value)));
  };
  const handleInterestSliderChange = (value) => {
    setInterest(value);
  };
  const handleMonthDuration = (value) => {
    setMonthDuration(Math.max(1, Math.min(60, value)));
  };
  const handleSliderMonth = (value) => {
    setMonthDuration(value);
  };

  const handleInputFee = (value) => {
    setFee(Math.max(0, Math.min(99999, value)));
  };
  const handleFeeSlider = (value) => {
    setFee(value);
  };

  // EMI Calculation
  useEffect(() => {
    const p = parseFloat(loan);
    const r = parseFloat(interest) / 100 / 12;
    const n = parseFloat(monthDuration);
    const fees = parseFloat(fee);
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiValue).toLocaleString("en-IN"));
    const totalInterestValue = emiValue * n - p;
    //setTotalInterest(totalInterestValue.toFixed(2));
    setTotalInterest(Math.round(totalInterestValue).toLocaleString("en-IN"));
    const totalPaymentValue = p + totalInterestValue + fees;
    //setTotalPayment(totalPaymentValue.toFixed(2));
    setTotalPayment(Math.round(totalPaymentValue).toLocaleString("en-IN"));
  }, [loan, monthDuration, interest, fee]);

  return (
    <>
      <div
        className="d-flex flex-column flex-md-row justify-content-between gap-4"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "1.625rem",
        }}
      >
        <div
          className="col-lg-6 col-md-6 col-12"
          style={{ marginBottom: "1rem" }}
        >
          <Loan
            loanAmount={loan}
            handleLoanInputChange={handleLoanInputChange}
            handleLoanSliderChange={handleLoanSliderChange}
          />
          <Interest
            interestRate={interest}
            handleInterestInputChange={handleInterestInputChange}
            handleInterestSliderChange={handleInterestSliderChange}
          />
          <Month
            monthDuration={monthDuration}
            handleMonthDuration={handleMonthDuration}
            handleSliderMonth={handleSliderMonth}
          />
          <Fee
            feeAmt={fee}
            handleInputFee={handleInputFee}
            handleFeeSlider={handleFeeSlider}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <Result
            emi={emi}
            loanAmounts={loan}
            interestVal={totalInterest}
            totalPayment={totalPayment}
            processingFees={fee}
          />
        </div>
      </div>
    </>
  );
};

export default LoanCalculator;
