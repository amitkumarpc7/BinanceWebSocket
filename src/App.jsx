import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  persistData,
  getDataFromStorage,
} from "./components/utils/dataPersistence";
import CryptoSelector from "./components/Crypto/CryptoSelector";
import CandlestickChart from "./components/Crypto/CandlestickChart";
import TimeFrameSelector from "./components/Crypto/TimeFrameSelector";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState("dotusdt");
  const [interval, setInterval] = useState("1m");
  const [chartData, setChartData] = useState(getDataFromStorage(selectedCoin));

  useEffect(() => {
    const data = getDataFromStorage(selectedCoin);
    setChartData(data);
  }, [selectedCoin]);
  return (
    <>
      <div className="mainScreen">
        <Navbar />
        <div className="container">
          <div className="coinTab">
            {/* for Selecting Coins and Setting interval */}
            <CryptoSelector setSelectedCoin={setSelectedCoin} />
            <TimeFrameSelector setInterval={setInterval} />
          </div>
          {/* for Charts */}
          <div className="chart-container">
            <CandlestickChart symbol={selectedCoin} interval={interval} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
