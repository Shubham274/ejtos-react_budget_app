import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input type="number" value={budget} step="5" />
    </div>
  );
};

export default Budget;
