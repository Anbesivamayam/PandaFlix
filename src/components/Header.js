import React from "react";
import { WalletCheckO } from "lovedicons/dist/outline";

const Header = () => {
  return (
    <main className="w-full">
      <header>
        <div className="py-1 lg:py-4 flex justify-between items-center w-full bg-black">
          <div className="px-2  mx-1 flex items-center gap-1 rounded-lg">
            {/* <span className="inline-block text-white bounce"><ImBooks size={28}/></span> */}
            <a href="https://www.npmjs.com/package/lovedicons" target={"_blank"} className="px-1 inline-flex justify-center items-center gap-2 text-white cursor-pointer tracking-widest">
              <WalletCheckO className="text-white w-8 h-8 "/> Tourin Talkies
            </a>
          </div>
          <ul className="hidden md:flex px-2 mx-1 text-white cursor-pointer gap-3">
            <li className="navbar">
              <a href="#">Home</a>
            </li>
            <li className="navbar">
              <a href="#">Movies</a>
            </li>
            <li className="navbar">
              <a href="#">IMDB</a>
            </li>
          </ul>
        </div>
      </header>
    </main>
  );
};

export default Header;
