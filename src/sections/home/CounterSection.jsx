import React from "react";
import Counter from "../../components/Counter";

const CounterSection = () => {
  return (
    <section class="p-10 flex justify-center items-center border-b-2 border-[var(--gold)]">
      <Counter />
    </section>
  );
};

export default CounterSection;
