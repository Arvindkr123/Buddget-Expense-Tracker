import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";

// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  console.log(userName);
  return (
    <div>
      Dashboard
      <h1>Hello {userName}</h1>
    </div>
  );
};

export default Dashboard;
