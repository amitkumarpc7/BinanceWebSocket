import React from "react";

const CryptoSelector = ({ setSelectedCoin }) => {
  const switchCoin = (event) => {
    setSelectedCoin(event.target.value);
  };
  return (
    <div>
      <select onChange={switchCoin}>
        <option value={"ethusdt"}>ETH/USDT</option>
        <option value={"bnbusdt"}>BNB/USDT</option>
        <option value={"dotusdt"}>DOT/USDT</option>
      </select>
    </div>
  );
};

export default CryptoSelector;
