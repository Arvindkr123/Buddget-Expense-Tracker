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
  //console.log(userName);
  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;
