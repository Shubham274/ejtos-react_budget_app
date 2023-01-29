import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropDown = () => {
  const { dispatch } = useContext(AppContext);
  const [currency, setCurrency] = useState("");
  const [currencyName, setCurrencyName] = useState(`${currency} Pound`);

  const updateCurrency = (event) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
    setCurrency(event.target.value);
    setCurrencyName(event.target.value);
    return;
  };

  return (
    <label className="currencyDropDown">
      {" "}
      Currency
      <select
        className="currencyDropDown"
        style={{ padding: 0 }}
        value={currencyName}
        onChange={(event) => updateCurrency(event)}
      >
        <option className="dropOptions" value="£">
          £ Pound
        </option>
        <option className="dropOptions" value="$">
          $ Dollar
        </option>
        <option className="dropOptions" value="€">
          € Euro
        </option>
        <option className="dropOptions" value="₹">
          ₹ Rupee
        </option>
      </select>
    </label>
  );
};

export default CurrencyDropDown;
