import React from 'react';
import { currencyCodes } from '../../mocks';
import './curencySelect.css';

interface ICurencySelect {
  selectedCurrency: string;
  handleCurrency: React.ChangeEventHandler<HTMLSelectElement>;
}

function CurencySelect({ selectedCurrency, handleCurrency }: ICurencySelect) {
  const countryCode = selectedCurrency.substring(0, 2);

  return (
    <div className="currency-select">
      <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="Flag" />
      <select
        onChange={handleCurrency}
        className="currency-dropdown"
        value={selectedCurrency}
      >
        {currencyCodes.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurencySelect;
