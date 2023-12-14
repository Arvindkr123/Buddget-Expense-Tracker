import React, { useEffect, useRef } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Form, useFetcher } from "react-router-dom";
import illustrations from "../assets/illustration.jpg";

const Intro = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

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
        <fetcher.Form method="post" ref={formRef}>
          <input
            ref={focusRef}
            type="text"
            name="userName"
            id="userName"
            placeholder="What is your name?"
            aria-level={"Your Name"}
            autoComplete="given-name"
            required
          />
          <input type="hidden" name="_action" value={"newUser"} />
          <button
            type="submit"
            className="btn btn--dark"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? "registering user" : "Create Account"}</span>
            <AiOutlineUserAdd width={20} />
          </button>
        </fetcher.Form>
      </div>
      <img src={illustrations} alt={"illustrations"} />
    </div>
  );
};

export default Intro;
