import React from "react";

const CryptoSelector = ({ setSelectedCoin }) => {
  // function to handle coin change
  const switchCoin = (event) => {
    setSelectedCoin(event.target.value);
  };
  return (
    <div>
      {/* Dropdown Menu for Selecting Cryptocurrency */}
      <select onChange={switchCoin}>
        <option value={"dotusdt"}>DOT/USDT</option>
        <option value={"ethusdt"}>ETH/USDT</option>
        <option value={"bnbusdt"}>BNB/USDT</option>
      </select>
    </div>
  );
};

export default CryptoSelector;
