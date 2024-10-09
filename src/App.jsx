import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  persistData,
  getDataFromStorage,
} from "./components/utils/dataPersistence";
import CryptoSelector from "./components/Crypto/CryptoSelector";
import CandlestickChart from "./components/Crypto/CandlestickChart";
import TimeFrameSelector from "./components/Crypto/TimeFrameSelector";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState("ethusdt");
  const [interval, setInterval] = useState("1m");
  const [chartData, setChartData] = useState(getDataFromStorage(selectedCoin));

  useEffect(() => {
    const data = getDataFromStorage(selectedCoin);
    setChartData(data);
  }, [selectedCoin]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="coinTab">
          <CryptoSelector setSelectedCoin={setSelectedCoin} />
          <TimeFrameSelector setInterval={setInterval} />
        </div>

        <div className="chart-container">
          <CandlestickChart symbol={selectedCoin} interval={interval} />
        </div>
      </div>
    </>
  );
};

export default App;
