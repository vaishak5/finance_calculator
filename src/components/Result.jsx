import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../App.css";
const Result = ({
  emi,
  loanAmounts,
  interestVal,
  totalPayment,
  processingFees,
}) => {
  const data = [
    { name: "Loan Amount", value: parseFloat(loanAmounts), color: "#FFA500" },
    {
      name: "Total Interest",
      value: parseFloat(interestVal.replace(/,/g, "")),
      color: "#1365C9",
    },
    { name: "Processing Fee", value: parseFloat(processingFees), color: "red" },
  ];

  return (
    <div style={{ background: "#f1f5ff", padding: "20px" }} className="">
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#1365c9",
          alignItems: "center",
          padding: "10px",
        }}
        className="col-12"
      >
        <h4
          style={{
            margin: "0px",
            fontSize: "14px",
            color: "white",
          }}
        >
          Your Monthly Loan EMI
        </h4>
        <h4 style={{ color: "white", fontSize: "14px", margin: "0px" }}>
          ₹{emi}
        </h4>
      </span>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div
          style={{ display: "flex", marginTop: "20px" }}
          className="col-lg-6 col-md-6 col-12"
        >
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={100}
                paddingAngle={1}
                dataKey="value"
                nameKey="name"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="payment-text">
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              ₹{totalPayment}
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }} className="col-lg-6 col-md-6 col-12">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              border: "1px solid #e5e7eb",
              padding: ".625rem",

              /* right: "30%",
          top: "70%", */
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#FFA500",
                }}
              ></span>
              <h4 style={{ margin: "0px", fontSize: "14px" }}>
                Loan Amount ₹{loanAmounts.toLocaleString("en-IN")}
              </h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#1365C9",
                }}
              ></span>
              <h4 style={{ margin: "0px", fontSize: "14px" }}>
                Total Interest ₹{interestVal.toLocaleString("en-IN")}
              </h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: "red",
                }}
              ></span>
              <h4 style={{ margin: "0px", fontSize: "14px" }}>
                Processing Fee ₹{processingFees.toLocaleString("en-IN")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
