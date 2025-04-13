import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddExpense(expense) {
    setExpenses(expenses.concat(expense));
  }

  function handleDeleteExpense(id) {
    const newExpenses = expenses.filter(function (expense) {
      return expense.id !== id;
    });
    setExpenses(newExpenses);
  }

  const filteredExpenses = expenses.filter(function (expense) {
    return expense.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <header className="header">
        <h1>Expense Tracker</h1>
        <p>
          Start tracking your money. <br />
          Record and view your expenses easily.
        </p>
      </header>

      <div className="main-layout">
        <div className="left-panel">
          <h2>Add Expense</h2>
          <p>Fill in the details below</p>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="right-panel">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
