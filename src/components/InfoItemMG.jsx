import React from "react";

const InfoItemMG = ({ text, icon }) => {
  return (
    <div class="flex items-center justify-center gap-4 text-center">
      <i class={`${icon} text-[var(--gold)]`}></i>
      <p>{text}</p>
    </div>
  );
};

export default InfoItemMG;
