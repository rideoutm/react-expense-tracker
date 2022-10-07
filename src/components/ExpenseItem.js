import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem({ title, amount, date }) {
  const [changeTitle, setChangeTitle] = useState(title);

  const clickHandler = () => {
    setChangeTitle("updated!");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{changeTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
