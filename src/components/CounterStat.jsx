import React from "react";

const CounterStat = ({ num, text }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-6xl text-[var(--gold)] font-bold">{num}</span>
      <p>{text}</p>
    </div>
  );
};

export default CounterStat;
