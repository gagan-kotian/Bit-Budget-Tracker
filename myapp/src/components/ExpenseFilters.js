import React, { useCallback } from "react";
import styles from "../styles/ExpenseFilters.module.css";
function ExpenseFilters({ handleParent }) {
  const handleChild = useCallback(
    (category) => {
      handleParent(category);
    },
    [handleParent]
  );

  return (
    <div className={styles.lis}>
      ExpenseFilters
      <select onChange={(e) => handleChild(e.target.value)}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="electronics">electronics</option>
        <option value="clothing">clothing</option>
      </select>
    </div>
  );
}

export default ExpenseFilters;
