import React from "react";

const HeroMG = () => {
  return (
    <section class="flex items-center justify-center p-16 gap-8 flex-wrap">
      <div class="flex flex-col items-start gap-4 max-w-[600px]">
        <h1 class="text-5xl">¿Would you like to meet Lionel Messi?</h1>
        <h3 class="text-xl">
          Sign up for the givaway for a chance to win a meet and greet with the
          best in the world!
        </h3>
        <a
          href="#form"
          class="bg-[var(--gold)] font-bold hover:text-[var(--gold)] hover:bg-black text-black px-4 py-1 border-2 border-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300 rounded"
        >
          Sign Up
        </a>
      </div>
      <div>
        <img
          src="img/hero-myg.jpeg"
          alt="#"
          class="w-full rounded-full border-2 border-[var(--gold)] max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default HeroMG;
