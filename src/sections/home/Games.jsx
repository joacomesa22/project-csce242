import React from "react";
import GameCard from "../../components/GameCard";

const Games = () => {
  return (
    <section class="flex justify-center items-center p-10 md:p-24">
      <div class="flex flex-wrap justify-center max-w-[1200px] gap-9">
        <GameCard
          time="5 Jun - 12:00pm"
          badgeLocal="img/afa.png"
          badgeAway="img/australia.png"
          type="Friendly"
        />
        <GameCard
          time="12 Jun - 17:15"
          badgeLocal="img/inter-badge.png"
          badgeAway="img/orlando.svg"
          type="MLS"
        />
        <GameCard
          time="29 Jun - 20:00pm"
          badgeLocal="img/inter-badge.png"
          badgeAway="img/atlanta.svg"
          type="MLS"
        />
      </div>
    </section>
  );
};

export default Games;
