import React, { useContext } from "react";
import styles from "../styles/ExpenseList.module.css";
import { MyContext } from "../contexts/MycontextProvider";
function ExpenseList({ expenses, dispatch }) {
  const { preferences } = useContext(MyContext);
  return (
    <div className={styles.elem}>
      ExpenseList
      <ul className={styles.lis}>
        {expenses.map((ele, i) => (
          <li key={i} className={styles.listItem}>
            <div className={styles.itemDetails}>
              Name Of Expense:
              <span className={styles.itemName}>{ele.name}</span>
              <br></br>
              Category:
              <span className={styles.itemCategory}>{ele.category}</span>
              <br></br>
              Amount:
              <span className={styles.itemAmount}>
                {ele.amt} {preferences.currency}
              </span>
            </div>
            <button
              className={styles.removeButton}
              onClick={() => dispatch({ type: "REMOVE", payload: i })}
            >
              &#10006; {/* Unicode 'X' symbol for a sleek remove button */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
