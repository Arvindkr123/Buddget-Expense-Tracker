import React from "react";
import { deleteExpenseItem, fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import { Table } from "../components";
import { toast } from "react-toastify";

// expense Loader
export const expenseLoader = async () => {
  const expenses = fetchData("expenses");
  return { expenses };
};

// Expense Actions
export const expenseActions = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {
      deleteExpenseItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted successfully");
    } catch (error) {
      throw new Error("There was an error deleting the expense");
    }
  }
};

const ExpensePage = () => {
  const { expenses } = useLoaderData();
  //console.log(expenses);

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length}) total</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expense to show</p>
      )}
    </div>
  );
};

export default ExpensePage;
