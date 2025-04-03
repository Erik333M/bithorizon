import { useEffect, useState } from 'react';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import CurencySelect from '../CurencySelect/CurencySelect';
import './CryptoTable.css';

function CryptoTable() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('GEL');
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSwapCurrencys = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    const Api_Key = 'a73ebdad235de96105d26787';
    const API_URL = `https://v6.exchangerate-api.com/v6/${Api_Key}/pair/${fromCurrency}/${toCurrency}`;
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Something is wrong');
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getExchangeRate();
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  return (
    <div className="currency-converter">
      <h2 className="converter-title">CURRENCY CONVERTER</h2>
      <form className="converter-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="form-label">Enter Amount</label>
          <input
            type="number"
            className="form-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(+e.target.value)
            }
            value={amount}
            required
          />
        </div>
        <div className="form-group form-currency-group">
          <div className="form-section">
            <label className="form-label">FROM</label>
            <CurencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={(e) => setFromCurrency(e.target.value)}
            />
          </div>
          <div className="swap-icon" onClick={handleSwapCurrencys}>
            <HiOutlineSwitchHorizontal />
          </div>
          <div className="form-section">
            <label className="form-label">TO</label>
            <CurencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className={`${isLoading ? 'loading' : ''} submit-btn`}
        >
          GET EXCHANGE RATE
        </button>
        <p className="exchange-rate-result">
          {' '}
          {isLoading ? 'Getting Exchange Rate..' : result}{' '}
        </p>
      </form>
    </div>
  );
}

export default CryptoTable;
