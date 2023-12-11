import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            placeholder="e.g. , Groceries"
            type="text"
            name="newBudget"
            id="newBudget"
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
        <button type="submit" className="btn btn--dark">
          <span>create budget</span>
          <RiMoneyDollarCircleFill width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
