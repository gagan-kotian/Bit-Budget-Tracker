import React, { useRef, useState } from "react";
import styles from "../styles/ExpenseForm.module.css";

function ExpenseForm({ dispatch }) {
  const [fd, setFd] = useState({ name: "", category: "food", amt: 0 });
  const refobj = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name: fd.name,
        category: fd.category,
        amt: parseFloat(fd.amt),
      },
    });
    refobj.current.focus();
    setFd({ name: "", category: "", amt: 0 });
  };
  return (
    <div>
      <form className={styles.formi} onSubmit={handleSubmit}>
        <input
          ref={refobj}
          type="text"
          value={fd.name}
          placeholder="Name Of Expense"
          onChange={(e) => setFd({ ...fd, name: e.target.value })}
        />
        <label>
          Category
          <select
            value={fd.category}
            onChange={(e) => setFd({ ...fd, category: e.target.value })}
          >
            <option value="food">Food</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </label>
        <input
          placeholder="Amount"
          type="number"
          value={fd.amt}
          onChange={(e) => setFd({ ...fd, amt: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
