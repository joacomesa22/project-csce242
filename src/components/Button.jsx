import React from "react";

const Button = ({ link, text }) => {
  return (
    <a
      href={link}
      className="bg-[var(--gold)] font-bold hover:text-[var(--gold)] hover:bg-black text-black px-4 py-1 border-2 border-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300 rounded"
      target="_blank"
    >
      {text}
    </a>
  );
};

export default Button;
