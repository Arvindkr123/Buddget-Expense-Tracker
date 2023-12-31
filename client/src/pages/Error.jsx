import React from "react";
import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh oh! We've got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button onClick={() => navigate(-1)} className="btn btn--dark">
          <AiOutlineArrowLeft />
          <span>Go Back</span>
        </button>
        <Link to={"/"} className="btn btn--dark">
          <AiOutlineHome width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
