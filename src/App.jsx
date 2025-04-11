import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life. Record, <br></br>categorize and analyze your spending.</p>
      </header>

      <div className="main-layout">
        <div className="left-panel">
          <h2>Add Expense</h2>
          <p>Enter your expenses details below</p>
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
