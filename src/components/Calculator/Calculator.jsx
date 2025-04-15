import React, { useState } from "react";
import "./calculator.css";

const CURRENCY_RATES = {
  bitcoin: 0.000017,
  GEL: 2.8,
  USD: 1,
  USDT: 1,
  RUB: 95,
  TRC20: 1,
};

const CURRENCY_ICONS = {
  bitcoin: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
  GEL: "https://upload.wikimedia.org/wikipedia/commons/4/43/GEL_Symbol.svg",
  USD: "https://upload.wikimedia.org/wikipedia/commons/6/65/US_Dollar_Symbol.svg",
  USDT: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
  RUB: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Russian_Ruble_Symbol.svg",
  TRC20: "https://cryptologos.cc/logos/tron-trx-logo.svg",
};

const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [amlChecked, setAmlChecked] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleAmlCheck = () => {
    setAmlChecked(!amlChecked);
  };

  const calculateResult = () => {
    const numericAmount = parseFloat(amount) || 0;
    const convertedAmount = numericAmount * CURRENCY_RATES[currency];
    const finalAmount = convertedAmount * 0.99; // Apply 1% commission
    return finalAmount.toFixed(2);
  };

  return (
    <div className='main'>
    <div className="container">
      <h1>Currency Converter</h1>
      <p className="commission-text">The commission for change is 1%</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        className="input-field"
      />
      <div className="currency-selector">
        <label>Choose Currency:</label>
        <select value={currency} onChange={handleCurrencyChange} className="dropdown">
          {Object.keys(CURRENCY_RATES).map((cur) => (
            <option key={cur} value={cur}>
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="result">
        <img src={CURRENCY_ICONS[currency]} alt={currency} className="currency-icon" />
        <span>Result: {calculateResult()}</span>
      </div>
      <div className="aml-check">
        <input type="checkbox" id="aml" checked={amlChecked} onChange={handleAmlCheck} />
        <label htmlFor="aml">
          I agree to the <a href="/aml-policy" target="_blank">AML Politics</a>
        </label>
      </div>
      <button className="submit-button" disabled={!amount || !amlChecked}>
        Submit
      </button>
    </div>
    </div>
  );
};

export default Calculator;