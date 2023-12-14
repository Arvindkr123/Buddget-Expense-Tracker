import React from "react";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

import { Form, Link } from "react-router-dom";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  // console.log(spent);
  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {/* percentage */}
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(e) => {
              if (
                !confirm(
                  "Are you sure you want to delete this budget permanently?"
                )
              ) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Delete Budget</span>
              <AiOutlineDelete width={20} />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <FaIndianRupeeSign width={20} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BudgetItem;
