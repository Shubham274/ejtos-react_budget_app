import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  if (totalExpenses > budget) {
    alert("You cannot reduce the budget value lower than the spending");
  }

  return (
    <div className="alert alert-primary">
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
