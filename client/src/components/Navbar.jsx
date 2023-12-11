import React from "react";
import logomark from "../assets/logomark.svg";
import { FaRegTrashAlt } from "react-icons/fa";

import { Form, NavLink } from "react-router-dom";
const Navbar = ({ userName }) => {
  const logoutHandler = (event) => {
    if (!confirm("Delete user and all data?")) {
      event.preventDefault();
    }
  };

  // console.log(userName);
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="logout" onSubmit={logoutHandler}>
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <FaRegTrashAlt width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Navbar;
