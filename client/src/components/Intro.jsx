import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Form } from "react-router-dom";
import illustrations from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="What is your name?"
            aria-level={"Your Name"}
            autoComplete="given-name"
            required
          />
          <input type="hidden" name="_action" value={"newUser"} />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <AiOutlineUserAdd width={20} />
          </button>
        </Form>
      </div>
      <img src={illustrations} alt={"illustrations"} />
    </div>
  );
};

export default Intro;
