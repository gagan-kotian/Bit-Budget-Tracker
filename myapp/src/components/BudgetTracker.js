import React, { useContext, useMemo } from "react";
import { MyContext } from "../contexts/MycontextProvider";
import styles from "../styles/BudgetTracker.module.css";

function BudgetTracker({ expenses, budget }) {
  const { preferences } = useContext(MyContext);

  const spent = useMemo(
    () => expenses.reduce((tsum, ele) => tsum + ele.amt, 0),
    [expenses]
  );
  const left = budget - spent;

  return (
    <div className={styles.budget}>
      BudgetTracker
      <p className={styles.bud}>
        Budget:{budget}
        {preferences.currency}
      </p>
      <p className={styles.p2}>Spent:{spent}</p>
      <p className={styles.p3}>Amount left:{left}</p>
    </div>
  );
}

export default BudgetTracker;
