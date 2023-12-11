import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

// actions
export async function dashboardAction({ request }) {
  const data = await request.formData();

  //console.log(data, request);
  // const userName = data.get("userName");
  // console.log(userName);

  const formData = Object.fromEntries(data);
  // console.log(formData);
  // add to local storage
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome,  ${formData.userName}`);
  } catch (error) {
    throw new Error(
      "There was a problem creating the your account. Please try again"
    );
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  //console.log(userName);
  return <div>{userName ? <p>{userName}</p> : <Intro />}</div>;
};

export default Dashboard;
