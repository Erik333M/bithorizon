
import './CryptoTable.css';
import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa';

import { FaDollarSign, FaMoneyBillWave, FaBitcoin } from 'react-icons/fa';

function CryptoTable() {
  const currencyRates = {
    USD: 1,       // USD to USD
    GEL: 3.25,    // USD to GEL
    BTC: 0.000022, // USD to BTC
    TRC20: 0.0001  // USD to TRC20
  };

  const [fromAmount, setFromAmount] = useState(100);
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GEL");
  const [commissionMessage] = useState("The commission for change is 1%");
  const [isChecked, setIsChecked] = useState(false);

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
    setToAmount(((e.target.value * currencyRates[toCurrency] * 1.01).toFixed(2))); // Adding 1% commission
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    setToAmount(((fromAmount * currencyRates[toCurrency] * 1.01).toFixed(2)));
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    setToAmount(((fromAmount * currencyRates[e.target.value] * 1.01).toFixed(2)));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Currency Converted!");
  };

  return (
    <div class="parent-container">
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit} className="converter-form">
        <div className="form-group">
          <label>From</label>
          <div className="input-with-select">
            <input
              type="number"
              value={fromAmount}
              onChange={handleFromAmountChange}
              placeholder="Enter amount"
              className="input-field"
            />
            <select
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
              className="currency-select"
            >
              <option value="USD">
                <FaDollarSign /> USD
              </option>
              <option value="GEL">
                <FaMoneyBillWave /> GEL
              </option>
              <option value="BTC">
                <FaBitcoin /> BTC
              </option>
              <option value="TRC20">
                <FaCoins /> TRC20
              </option>
            </select>
          </div>
          <p className="commission-text">{commissionMessage}</p>
        </div>

        <div className="form-group">
          <label>To</label>
          <div className="input-with-select">
            <input
              type="text"
              value={toAmount}
              disabled
              className="input-field"
            />
            <select
              value={toCurrency}
              onChange={handleToCurrencyChange}
              className="currency-select"
            >
              <option value="USD">
                <FaDollarSign /> USD
              </option>
              <option value="GEL">
                <FaMoneyBillWave /> GEL
              </option>
              <option value="BTC">
                <FaBitcoin /> BTC
              </option>
              <option value="TRC20">
                <FaCoins /> TRC20
              </option>
            </select>
            
          </div>
        </div>

        <div className="form-group">
          <label className="aml-label">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I agree to the <a href="/aml-policy" target="_blank" rel="noopener noreferrer">AML Policy</a>
          </label>
        </div>

        <button
          type="submit"
          className={`submit-btn ${isChecked ? "" : "disabled"}`}
          disabled={!isChecked}
        >
          Convert Currency
        </button>
      </form>
    </div>
    </div>
  );
}

export default CryptoTable;
