import React from "react";

const Hero = () => {
  return (
    <section class="herobg bg-[75%] flex justify-center items-center border-b-2 border-[var(--gold)]">
      <div class="hero-text-shadow text-center sm:text-start p-4 flex flex-col gap-2 max-w-[1280px] w-full">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold">
          Welcome to <span class="text-[var(--gold)]">L10</span>!
        </h1>
        <h2 class="lg:text-2xl font-bold">
          The
          <span class="text-[var(--gold)]">best</span> player deserves the
          <span class="text-[var(--gold)]">best</span> fanpage
        </h2>
        <p class="text-sm lg:text-base">
          Get access to breaking news, exclusive content, giveaways, and more!
        </p>
      </div>
    </section>
  );
};

export default Hero;
