import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Add code to import the components
import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import AllocationForm from "./components/AllocationForm";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        {/* Add the code here to add the components          */}
        <Budget />
        <Remaining />
        <ExpenseItem />
        <ExpenseList />
        <ExpenseTotal />
        <AllocationForm />
      </div>
    </AppProvider>
  );
};
export default App;
