import React, { useEffect, useRef } from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const Fetcher = useFetcher();
  const formRef = useRef();
  const focusRef = useRef();
  const isSubmitting = Fetcher.state === "submitting";

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <Fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            placeholder="e.g. , Groceries"
            type="text"
            name="newBudget"
            id="newBudget"
            ref={focusRef}
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            placeholder="e.g. , $350"
            type="number"
            step={0.01}
            name="newBudgetAmount"
            id="newBudgetAmount"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button disabled={isSubmitting} type="submit" className="btn btn--dark">
          {isSubmitting ? (
            <span>Submitting budgets...</span>
          ) : (
            <>
              <span>create budget</span>
              <RiMoneyDollarCircleFill width={20} />
            </>
          )}
        </button>
      </Fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
