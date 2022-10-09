import "./ExpenseForm.scss";
import { useState } from "react";

function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showAddExp, setShowAddExp] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form action="">
      <button
        onClick={(e) => {
          setShowAddExp(false);
          e.preventDefault();
        }}
        className={showAddExp ? "show-hide" : "show-hide--hidden"}
      >
        Add New Expense
      </button>
      <div
        className={
          !showAddExp
            ? "new-expense__controls"
            : "new-expense__controls--hidden"
        }
      >
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={() => setShowAddExp(false)}>Cancel</button>
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
