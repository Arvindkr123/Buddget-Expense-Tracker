import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Error, ExpensePage, expenseLoader } from "./pages";
import { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Main, { mainLoader } from "./layout/Main";
import { logoutAction } from "./actions/logout";
import { expenseActions } from "./pages/ExpensePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensePage />,
        loader: expenseLoader,
        action: expenseActions,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
