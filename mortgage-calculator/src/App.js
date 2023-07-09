import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const [payment, setPayment] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data)
  };

  return (
    <div className="App">
      <form onSubmit={handleCalculate} className="form">
        <h1>Mortgage calculator</h1>
        <label className="label">
          Loan Amount
          <input
            type="number"
            className="input"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label className="label">
          Loan term
          <input
            type="number"
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
        <label className="label">
          Interest rate
          <input
            type="number"
            className="input"
            onChange={(e) => setInterest(e.target.value)}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default App;
