import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleExpenseSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const expense = {
      date: formData.get('date'),
      amount: parseFloat(formData.get('amount')),
      category: formData.get('category'),
      details: formData.get('details'),
    };
    setExpenses([...expenses, expense]);
    event.target.reset();
  };

  return (
    <div className="container">
      <h1 className="mt-4">  Smart Medication Tracking System:</h1>
      <h4 className="mt-3">Submit Daily Record refilling prescriptions:</h4>
      <form onSubmit={handleExpenseSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Doses Taken:</label>
          <input type="number" id="amount" name="amount" className="form-control" required step="0.01" />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="details">Details/Prescriptions:</label>
          <textarea id="details" name="details" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Add Record</button>
      </form>

      <h2 className="mt-4">Daily Schedule:</h2>
      <h5 class="p text-center mb-5" >Daily Schedule:
Date: 2023-06-11
value:
Category: BP,sugar
Details: Telvas for BP taken tablet in the morning, Metformin for sugar taken before meal</h5>

      <h2 className="mt-4">Recorded Routine:</h2>
      {expenses.length === 0 ? (
        <p>Daily Activity Not Recorded.</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense, index) => (
            <li key={index} className="list-group-item">
              <div>Date: {expense.date}</div>
              <div>value: {expense.value}</div>
              <div>Category: {expense.category}</div>
              <div>Details: {expense.details}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
