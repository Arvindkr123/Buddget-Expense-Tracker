import React from "react";
import {
  createExpense,
  deleteExpenseItem,
  getAllMatchingItems,
} from "../helpers";
import { useLoaderData } from "react-router-dom";
import { AddExpenseForm, BudgetItem, Table } from "../components";
import { toast } from "react-toastify";

// budget Expense Action
export const budgetAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // delete Expense
  if (_action === "deleteExpense") {
    try {
      deleteExpenseItem({ key: "expenses", id: values.expenseId });
      return toast.success("Deleted expense successfully");
    } catch (error) {
      throw new Error("There was an error deleting your expense");
    }
  }

  // Create Expense in Budget page
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success("created expense successfully");
    } catch (error) {
      throw new Error("There was an error creating your expense");
    }
  }
};

export const budgetLoader = async ({ params }) => {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  if (!budget) {
    throw new Error("The budget you are trying to find does not exist!!");
  }

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });
  return { budget, expenses };
};

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  //console.log(expenses);

  return (
    <div className="grid-lg" style={{ "--accent": budget.color }}>
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
