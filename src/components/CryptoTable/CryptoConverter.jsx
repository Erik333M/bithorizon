import React, { useState } from 'react'
import { FaExchangeAlt } from 'react-icons/fa'
import './CryptoConverter.css'

function CryptoConverter() {
  const currencyRates = {
    USD: 1,       // USD to USD
    GEL: 3.25,    // USD to GEL
    EUR: 1.09,    // USD to EUR
    TRC20: 0.0001, // USD to USDT TRC20
    ERC20: 0.0001  // USD to USDT ERC20
  };

  const [fromAmount, setFromAmount] = useState(300);
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("ERC20");
  const [toCurrency, setToCurrency] = useState("USD");
  const [conversionHistory, setConversionHistory] = useState([]);
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [erc20Address, setErc20Address] = useState("");
  const [agreeRules, setAgreeRules] = useState(false);
  const [wantNotifications, setWantNotifications] = useState(false);

  const cashCurrencies = ["USD", "GEL", "EUR"];
  const nonCashCurrencies = ["TRC20", "ERC20"];

  const calculateConversion = (amount, fromCurr, toCurr) => {
    const rate = currencyRates[toCurr] / currencyRates[fromCurr];
    return (amount * rate * 1.01).toFixed(2); // Adding 1% commission
  };

  const handleFromAmountChange = (e) => {
    const amount = e.target.value;
    setFromAmount(amount);
    setToAmount(calculateConversion(amount, fromCurrency, toCurrency));
  };

  const handleFromCurrencyChange = (e) => {
    const newFromCurrency = e.target.value;
    setFromCurrency(newFromCurrency);
    if (cashCurrencies.includes(newFromCurrency)) {
      if (cashCurrencies.includes(toCurrency)) {
        setToCurrency("TRC20");
      }
    } else if (nonCashCurrencies.includes(newFromCurrency)) {
      if (nonCashCurrencies.includes(toCurrency)) {
        setToCurrency("USD");
      }
    }
    setToAmount(calculateConversion(fromAmount, newFromCurrency, toCurrency));
  };

  const handleToCurrencyChange = (e) => {
    const newToCurrency = e.target.value;
    setToCurrency(newToCurrency);
    if (cashCurrencies.includes(newToCurrency)) {
      if (cashCurrencies.includes(fromCurrency)) {
        setFromCurrency("TRC20");
      }
    } else if (nonCashCurrencies.includes(newToCurrency)) {
      if (nonCashCurrencies.includes(fromCurrency)) {
        setFromCurrency("USD");
      }
    }
    setToAmount(calculateConversion(fromAmount, fromCurrency, newToCurrency));
  };

  const handleSwapCurrencies = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    if (cashCurrencies.includes(toCurrency)) {
      if (cashCurrencies.includes(tempCurrency)) {
        setFromCurrency("TRC20");
      }
    } else if (nonCashCurrencies.includes(toCurrency)) {
      if (nonCashCurrencies.includes(tempCurrency)) {
        setToCurrency("USD");
      }
    }
    setToAmount(calculateConversion(fromAmount, toCurrency, tempCurrency));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      agreeRules &&
      phone &&
      telegram &&
      email &&
      erc20Address
    ) {
      const conversion = {
        id: Date.now(),
        from: `${fromAmount} ${fromCurrency}`,
        to: `${toAmount} ${toCurrency}`,
        rate: (currencyRates[toCurrency] / currencyRates[fromCurrency]).toFixed(6),
        timestamp: new Date().toLocaleString(),
      };
      setConversionHistory([conversion, ...conversionHistory].slice(0, 5));
      alert("Order Made!");
    } else {
      alert("Please fill all details and agree to the rules.");
    }
  };


  const fromOptions = cashCurrencies.includes(toCurrency)
    ? [
        { value: "TRC20", label: "Tether TRC20 USDT" },
        { value: "ERC20", label: "Tether ERC20 USDT" },
      ]
    : [
        { value: "USD", label: "Cash USD" },
        { value: "GEL", label: "Cash GEL" },
        { value: "EUR", label: "Cash EUR" },
      ];

  const toOptions = cashCurrencies.includes(fromCurrency)
    ? [
        { value: "TRC20", label: "Tether TRC20 USDT" },
        { value: "ERC20", label: "Tether ERC20 USDT" },
      ]
    : [
        { value: "USD", label: "Cash USD" },
        { value: "GEL", label: "Cash GEL" },
        { value: "EUR", label: "Cash EUR" },
      ];

  let erc20Placeholder = "ERC-20 address";
  if (nonCashCurrencies.includes(fromCurrency)) {
    erc20Placeholder = `Your ${fromCurrency} address`;
  } else if (nonCashCurrencies.includes(toCurrency)) {
    erc20Placeholder = `Your ${toCurrency} address`;
  }

  return (
    <div className="parent-container">
      <h3 className='form-title'>Converter</h3>
      <form onSubmit={handleSubmit} className="converter-form">
        <div className="form-sections">
          <div className="form-section give-section">
            <h3>GIVE</h3>
            <div className="currency-option">
              <select
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
                className="currency-select"
              >
                {fromOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="amount-input">
              <input
                type="number"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="From 300 to 600000"
                className="input-field"
                min="0"
              />
            </div>
          </div>

          <div className="swap-button-container">
            <button
              type="button"
              className="swap-btn"
              onClick={handleSwapCurrencies}
              title="Swap currencies"
            >
             <FaExchangeAlt
                />
            </button>
          </div>

          <div className="form-section get-section">
            <h3>GET</h3>
            <div className="currency-option">
              <select
                value={toCurrency}
                onChange={handleToCurrencyChange}
                className="currency-select"
              >
                {toOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="amount-input">
              <input
                type="text"
                value={toAmount}
                disabled
                placeholder="Up to 9927574"
                className="input-field disabled"
              />
            </div>
            <p className="location-text">Get in Tbilisi</p>
          </div>

          {/* DETAILS Section */}
          <div className="form-section details-section">
            <h3>DETAILS</h3>
            <div className="details-inputs">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="input-field"
              />
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="Telegram"
                className="input-field"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="input-field"
              />
              <input
                type="text"
                value={erc20Address}
                onChange={(e) => setErc20Address(e.target.value)}
                placeholder={erc20Placeholder}
                className="input-field"
              />
            </div>
            <div className="rate-fee">
              <p>Rate: 1.008:1</p>
            </div>
            <div className="checkboxes">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeRules}
                  onChange={() => setAgreeRules(!agreeRules)}
                />
                I agree with the rules and KYC/AML policy
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={wantNotifications}
                  onChange={() => setWantNotifications(!wantNotifications)}
                />
                I want to receive email notifications
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`submit-btn ${agreeRules ? '' : 'disabled'}`}
          disabled={!agreeRules}
        >
          MAKE AN ORDER
        </button>
      </form>

    </div>
  );
}

export default CryptoConverter;