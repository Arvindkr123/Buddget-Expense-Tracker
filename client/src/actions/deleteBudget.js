import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";
import { redirect } from "react-router-dom";

const deleteBudget = ({ params }) => {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
    toast.success("Budget deleted successfully!");
    const associatedExpense = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });
    associatedExpense.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });
  } catch (error) {
    throw new Error("There was an error deleting the budget");
  }
  return redirect("/");
};

export default deleteBudget;
