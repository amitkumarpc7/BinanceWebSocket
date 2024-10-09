import React, { useEffect, useState } from "react";
import useBinanceWebSocket from "../hooks/useBinanceWebSocket";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale, 
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale, 
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CandlestickChart = ({ symbol, interval }) => {
  const candlestickData = useBinanceWebSocket(symbol, interval);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: `${symbol} Candlestick Data`,
        data: [],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });

  useEffect(() => {
    const times = candlestickData.map((candle) =>
      new Date(candle.time).toLocaleTimeString()
    );
    const prices = candlestickData.map((candle) => candle.close);
    setChartData({
      labels: times,
      datasets: [
        {
          label: `"${symbol}" Candlestick Data`,
          data: prices,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    });
  }, [candlestickData, symbol]);
  return <Line data={chartData} />;
};

export default CandlestickChart;
