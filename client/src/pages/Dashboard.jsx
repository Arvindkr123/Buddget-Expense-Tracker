import React from "react";
import {
  createBudget,
  createExpense,
  deleteExpenseItem,
  fetchData,
  wait,
} from "../helpers";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AddBudgetForm,
  Intro,
  AddExpenseForm,
  BudgetItem,
  Table,
} from "../components";

// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
};

// actions
export async function dashboardAction({ request }) {
  await wait();
  const data = await request.formData();
  // Add newUser
  const { _action, ...values } = Object.fromEntries(data);

  // new User submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome,  ${values.userName}`);
    } catch (error) {
      throw new Error(
        "There was a problem creating the your account. Please try again"
      );
    }
  }

  // for budget
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Your budget has been created");
    } catch (error) {
      throw new Error(
        "There was a problem creating the budget. Please try again"
      );
    }
  }

  // create Expense
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created successfully`);
    } catch (error) {
      throw new Error("There was a problem creating your expense.");
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteExpenseItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("deleted expense successfully.");
    } catch (error) {
      throw new Error("There was problem to deleting your expenses");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
  //console.log(expenses);
  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {budgets.map((budget) => {
                    return <BudgetItem key={budget.id} budget={budget} />;
                  })}
                </div>
                {expenses && expenses.length > 0 && (
                  <div className="grid-md">
                    <h2>Recent Expenses</h2>
                    <Table
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link className="btn btn--dark" to={"expenses"}>
                        View all expenses
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgetting is secret to financial freedoom.</p>
                <p>Create a Budget to get started</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
