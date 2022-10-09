import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2020");
  console.log(selectedYear);

  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          setSelectedYear={setSelectedYear}
          selectedYear={selectedYear}
        />
        <ExpensesChart expenses={expenses} />
        {expenses
          .filter((el) => el.date.getFullYear().toString() === selectedYear)
          .map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                selectedYear={selectedYear}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })}
      </div>
    </>
  );
}

export default Expenses;
