import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {
  formDateToLocale,
  formatCurrency,
  getAllMatchingItems,
} from "../helpers";
import { Link, useFetcher } from "react-router-dom";

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher();
  const buget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];
  // console.log(buget);

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formDateToLocale(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link style={{ "--accent": buget.color }} to={`/budget/${buget.id}`}>
            {buget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            area-label={`Delete ${expense.name} expense`}
          >
            <AiOutlineDelete width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
