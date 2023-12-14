import React from "react";
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (val, index) => {
                return <th key={index}>{val}</th>;
              }
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <ExpenseItem expense={expense} showBudget={showBudget}/>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
