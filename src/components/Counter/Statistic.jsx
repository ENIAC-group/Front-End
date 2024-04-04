import React from "react";
import CounterUp from "./counter";

const Statistic = () => {
  return (
    <div style={{backgroundColor:'white'}}>
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <CounterUp EndNum={200} label="مراجعین" />
      </div>
      <div style={{ flex: 1 }}>
        <CounterUp EndNum={30} label="درمانگر ها" />
      </div>
      <div style={{ flex: 1 }}>
        <CounterUp EndNum={150} label="نوبت ثبت شده" />
      </div>
    </div>
    </div>
  );
};

export default Statistic;
