import React from "react";

const InfoCard = ({ title, text, img, rev = false }) => {
  return (
    <div
      class={`flex ${
        rev && "flex-row-reverse"
      } justify-center items-center gap-8 rounded-3xl flex-wrap p-8`}
    >
      <div class="flex flex-col gap-2 max-w-[500px]">
        <h2 class="text-3xl text-[var(--gold)] ">{title}</h2>
        <p>{text}</p>
      </div>
      <div class="max-w-[500px]">
        <img
          src={img}
          alt="Messi celebrating"
          class="w-full rounded-3xl border-2 border-[var(--gold)]"
        />
      </div>
    </div>
  );
};

export default InfoCard;
