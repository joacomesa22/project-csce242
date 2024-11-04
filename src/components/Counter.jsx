import React from "react";
import CounterStat from "./CounterStat";

const Counter = () => {
  return (
    <div className="flex items-center gap-8 lg:gap-14 flex-wrap justify-center text-center">
      <h2 className="text-4xl">Next Game:</h2>
      <div className="flex gap-6">
        <CounterStat num={"12"} text={"days"} />
        <CounterStat num={"19"} text={"hours"} />
        <CounterStat num={"43"} text={"minutes"} />
      </div>
    </div>
  );
};

export default Counter;
