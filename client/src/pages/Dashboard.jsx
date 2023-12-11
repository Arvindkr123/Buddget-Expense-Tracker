import React from "react";
import { createBudget, fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AddBudgetForm, Intro } from "../components";

// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

// actions
export async function dashboardAction({ request }) {
  const data = await request.formData();

  //console.log(data, request);
  // const userName = data.get("userName");
  // console.log(userName);

  // const formData = Object.fromEntries(data);
  // console.log(formData);
  // add to local storage

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
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  //console.log(userName);
  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? <></> : <></>} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default Dashboard;
