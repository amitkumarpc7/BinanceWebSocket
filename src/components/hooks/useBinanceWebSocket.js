import React, { useEffect, useState } from "react";

const useBinanceWebSocket = (symbol, interval) => {
  const [candlestickData, setCandlestickData] = useState([]);

  useEffect(() => {
    // console.log('Symbol',symbol);
    // console.log("Interval",interval)
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`
    );
    // console.log(ws);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const candlestick = data.k;
      setCandlestickData((prevData) => [
        ...prevData,
        {
          time: candlestick.t,
          open: candlestick.o,
          high: candlestick.h,
          low: candlestick.l,
          close: candlestick.c,
        },
      ]);
    };
    return () => {
      ws.close();
    };
  }, [symbol, interval]);
  return candlestickData;
};

export default useBinanceWebSocket;
