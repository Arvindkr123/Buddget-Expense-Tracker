import React from "react";
import { formDateToLocale, formatCurrency } from "../helpers";

const ExpenseItem = ({ expense }) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formDateToLocale(expense.createdAt)}</td>
    </>
  );
};

export default ExpenseItem;
