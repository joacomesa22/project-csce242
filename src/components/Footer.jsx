import React from "react";

const Footer = () => {
  return (
    <footer className="lg:px-14 lg:py-6 p-4 bg-[var(--gold)] flex justify-center">
      <div className="flex justify-center items-center md:justify-between flex-wrap gap-10 max-w-screen-xl w-full">
        <div className="max-w-[80px] hover:scale-110 duration-300">
          <a href="./index.html">
            <img src="/img/logo-black.png" alt="logo" />
          </a>
        </div>

        <div className="flex gap-4">
          <a href="https://www.instagram.com/">
            <img
              src="img/instagram.svg"
              alt="social"
              className="hover:-translate-y-2 duration-300"
            />
          </a>
          <a href="https://twitter.com/home">
            <img
              src="img/twitter.svg"
              alt="social"
              className="hover:-translate-y-2 duration-300"
            />
          </a>
          <a href="https://www.tiktok.com/es/">
            <img
              src="img/tiktok.svg"
              alt="social"
              className="hover:-translate-y-2 duration-300"
            />
          </a>
        </div>

        <div>
          <a
            href="/admin"
            className="text-[var(--dark)] text-sm font-bold underline"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
