import React, { useEffect, useState } from "react";
import { WalletCheckO } from "lovedicons/dist/outline";
import { CiSearch } from "react-icons/ci"; // icons
import { searchAllInfo, searchInfo } from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchInput = () => {
    if (searchQuery.trim() === "") {
      alert("Type something to search in the Database");
    } else {
      dispatch(searchInfo(searchQuery))
    }
  }

  return (
    <main className="w-full">
      <header>
        <div className="py-1 lg:py-3 xl:py-6 flex justify-between items-center w-full bg-[#151619]">
          <div className="px-2 mx-1 flex items-center gap-1 rounded-lg">
            {/* <span className="inline-block text-white bounce"><ImBooks size={28}/></span> */}
            <a
              // href="https://www.npmjs.com/package/lovedicons"
              target={"_blank"}
              className="px-1 inline-flex justify-center items-center gap-2 text-white cursor-pointer md:tracking-[5px]"
            >
              <WalletCheckO className="text-white  md:w-8 md:h-8" /> PandaFlix
            </a>
          </div>
          <div className="flex">
            <div className="hidden md:flex ">
              <ul className="hidden md:flex px-2 mx-1 text-white cursor-pointer gap-3">
                <li className="navbar">
                  <a href="#">Movies</a>
                </li>
                <li className="navbar">
                  <a href="#">Series</a>
                </li>
                <li className="navbar">
                  <a href="#">IMDB</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-start items-center mr-3">
              <input
                className="xs:w-28 md:w-full p-1 md:p-1.5 rounded-lg border-0 bg-[#F5F7FB] text-gray-700 
                focus:text-gray-700 focus:outline-gray-100 text-sm md:placeholder:text-xs  tracking-widest"
                type="search"
                placeholder="Search movies/shows"
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                }}
              />
              <span className="flex p-2 text-2xl text-gray-700 cursor-pointer">
                <CiSearch
                  className="text-white"
                  onClick={() => {
                    handleSearchInput()
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
