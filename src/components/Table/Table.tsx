import axios from 'axios';
import { useEffect, useState } from 'react';
import { TCoin } from '../../types/TCoin';
import './table.css';

const Table = () => {
  const [coins, setCoins] = useState<TCoin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          },
        );
        console.log(JSON.stringify(response.data, null, 5));
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h2 className="table-title">Top Cryptocurrencies</h2>
      <table className="crypto-table">
        <thead>
          <tr>
            <th className="table-header">Coin</th>
            <th className="table-header text-right">Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="table-row">
              <td className="table-cell coin-info">
                <img src={coin.image} alt={coin.name} className="coin-icon" />
                <span>{coin.name}</span>
              </td>
              <td className="table-cell text-right">
                ${coin?.current_price.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
