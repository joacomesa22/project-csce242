import React from "react";

const BannerMG = ({ children }) => {
  return (
    <section class="flex flex-wrap gap-8 justify-around items-center border-y-2 border-[var(--gold)] p-12 text-xl">
      {children}
    </section>
  );
};

export default BannerMG;
