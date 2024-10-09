import React from "react";

const TimeFrameSelector = ({setInterval}) => {
    const handleTime=(event)=>{
        setInterval(event.target.value);
    }
  return (
    <div>
      <select onChange={handleTime}>
        <option value="1m">1 Minute</option>
        <option value="3m">3 Minute</option>
        <option value="5m">5 Minute</option>
      </select>
    </div>
  );
};

export default TimeFrameSelector;
