import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      id="navbar"
      className="p-4 z-10 flex justify-center border-b-2 border-[var(--gold)]"
    >
      <div className="flex justify-between items-center  max-w-screen-xl w-full">
        <div className="hover:scale-105 duration-300">
          <a href="/">
            <img src="/img/logo.png" alt="logo" className="max-w-[80px]" />
          </a>
        </div>
        <ul className="hidden sm:flex gap-8">
          <li>
            <a href="/" className="navLink">
              Home
            </a>
          </li>
          <li>
            <a href="/news" className="navLink">
              News
            </a>
          </li>
          <li>
            <a href="./meet-and-greet" className="navLink">
              Meet&Greet
            </a>
          </li>
          <li>
            <a href="/contact" className="navLink">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block sm:hidden">
          <svg
            className="w-9 h-9 cursor-pointer"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          className={
            !nav
              ? "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-[var(--gold)] bg-colorDark flex flex-col items-center justify-around z-10"
              : "fixed left-0 top-0 h-full w-[60%] border-r border-r-[var(--gold)]  bg-[--dark] ease-in-out duration-500 flex flex-col items-center justify-around z-10"
          }
        >
          <ul className="flex flex-col gap-8 h-full pt-20 items-center">
            <li className="p-4">
              <a href="/" className="navLink" onClick={handleNav}>
                Home
              </a>
            </li>
            <li className="p-4">
              <a href="/news" className="navLink" onClick={handleNav}>
                News
              </a>
            </li>
            <li className="p-4">
              <a href="/meet-and-greet" className="navLink" onClick={handleNav}>
                Meet&Greet
              </a>
            </li>
            <li className="p-4">
              <a href="/contact" className="navLink" onClick={handleNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
