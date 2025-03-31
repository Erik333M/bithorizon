import React from 'react'
import './curencySelect.css'

function CurencySelect({selectedCurrency,handleCurrency}) {
    const currencyCodes = [
        "AED", "ALL", "AMD", "ANG", "AUD", "BHD", "BOB", "BRL",
        "BSD", "BTN", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK","EGP",
        "ERN", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
        "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
        "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
        "JPY", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
        "LAK", "LBP", "LKR", "LRD",
        "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
        "TTD", "TVD", "TWD", "TZS", "SZL", "USD", "UYU", "UZS", "VES",
        "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER",
        ];
    const countryCode = selectedCurrency.substring(0,2)    
    
    return (
        <div className="currency-select">
            <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="Flag" />
            <select
                onChange={handleCurrency}
                className="currency-dropdown"
                value={selectedCurrency}>
                {currencyCodes.map(currency => (
                    <option key={currency} value={currency} >{currency}</option>
                ))}
                
                
            </ select>
        </div>
    )
}

export default CurencySelect
