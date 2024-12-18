import React from "react";

const GameCard = ({ badgeLocal, badgeAway, time, type }) => {
  return (
    <div class="p-10 border-2 border-[var(--gold)] flex flex-col justify-between items-center gap-4 w-full md:w-[300px] text-center">
      <p class="text-[var(--gold)] text-xl font-bold">{time}</p>
      <div class="flex gap-4 items-center">
        <img src={badgeLocal} class="w-[50px]" alt="escudo" />
        <span class="font-bold">vs</span>
        <img src={badgeAway} class="w-[50px]" alt="badge" />
      </div>
      <p class="font-bold">{type}</p>
    </div>
  );
};

export default GameCard;
