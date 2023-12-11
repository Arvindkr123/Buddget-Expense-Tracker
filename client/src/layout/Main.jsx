import React from "react";
import { fetchData } from "../helpers";
import { Outlet, useLoaderData } from "react-router-dom";
// assests
import wave from "../assets/wave.svg";
import { Navbar } from "../components";

// main loader
export const mainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Navbar userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="wave image" />
    </div>
  );
};

export default Main;
