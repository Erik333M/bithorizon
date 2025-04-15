import React, { useEffect, useState } from 'react';
// import './CurrencyCounter.css'; // Import your CSS stylesheet

const CurrencyCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFromCurrency, setSelectedFromCurrency] = useState('USD');
  const [selectedToCurrency, setSelectedToCurrency] = useState('USD');
  const [convertedValue, setConvertedValue] = useState('');

  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        showNotification(convertedValue);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            showNotification(convertedValue);   

          }
        });
      }
    }
  }, [convertedValue]);

  const showNotification = (value) => {
    const notification = new Notification('Conversion Result', {
      body: `The converted value is ${value} USD.`
    });

    notification.onclick = () => {
      // Handle notification click (optional)
    };
  };

  const currencyOptions = [
    'USD', 'EUR', 'USDT', 'JPY', 'GBP',
    // Add more currencies as needed
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Convert the value from the selectedFromCurrency to USD using a suitable conversion API
    // Replace 'YOUR_API_KEY' with your actual API key
    fetch(`https://api.example.com/convert?from=${selectedFromCurrency}&to=USD&amount=${value}`, {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`
      }
    })
    .then(response => response.json())
    .then(data => {
        // alert(`Converted value: ${data.result} USD`);
      setConvertedValue(data.result);
    })
    .catch(error => {
      console.error('Error fetching conversion data:', error);
    });
  };

  const handleFromCurrencyChange = (event) => {
    setSelectedFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setSelectedToCurrency(event.target.value);
  };

  return (
    <div className="currency-counter">
      <label htmlFor="input-value">Enter value:</label>
      <input
        type="number"
        id="input-value"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label htmlFor="from-currency-select">Convert from:</label>
      <select
        id="from-currency-select"
        value={selectedFromCurrency}
        onChange={handleFromCurrencyChange}
      >
        {currencyOptions.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <label htmlFor="to-currency-select">Convert to:</label>
      <select
        id="to-currency-select"
        value={selectedToCurrency}
        onChange={handleToCurrencyChange}
      >
        <option value="USD">USD</option>
      </select>

      <p>Converted value: {convertedValue} USD</p>
    </div>
  );
};

export default CurrencyCounter;