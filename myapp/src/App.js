import "./App.css";
import { useContext, useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import expenseReducer from "./reducers/expenseReducer";
import MycontextProvider, { MyContext } from "./contexts/MycontextProvider";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseFilters from "./components/ExpenseFilters";
import UserSettings from "./components/UserSettings";

function App() {
  const [expenses, dispatch] = useReducer(expenseReducer, []);
  const [budget, setBudget] = useState(1000);
  const [fc, setFc] = useState("all");

  const handleParent = (category) => {
    setFc(category);
  };

  const fe = expenses.filter((expense) =>
    fc === "all" ? true : expense.category === fc
  );
  const { preferences } = useContext(MyContext);

  return (
    <div className="Appp">
      <div className={`App ${preferences.theme}`}>
        <div className="aa">
          <UserSettings />
          <h2>Bit BudgetTracker</h2>
          <h3 className="title">save and pave</h3>
        </div>
        <ExpenseForm dispatch={dispatch} />
        <ExpenseFilters handleParent={handleParent} />
        <ExpenseList expenses={fe} dispatch={dispatch} />
        <BudgetTracker expenses={fe} budget={budget} />
      </div>
    </div>
  );
}

export default App;
