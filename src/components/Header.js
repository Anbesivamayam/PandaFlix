import React, { useEffect, useState } from "react";
import { WalletCheckO } from "lovedicons/dist/outline";
import { CiSearch } from "react-icons/ci"; // icons
import { BiCameraMovie } from "react-icons/bi"; // icons
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs"; // icons
import { searchAllInfo, searchInfo } from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ darkTheme, setDarkTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [enabled, setEnabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchInput = () => {
    if (searchQuery.trim() === "") {
      alert("Type something to search in the Database");
    } else {
      dispatch(searchInfo(searchQuery));
      navigate(`/searchMovies`);
    }
  };
  const handleEnterKeySubmit = (e) => {
    if (searchQuery.trim() === "") {
      alert("Type something to search in the Database");
      return;
    }
    if (e.key === "Enter") {
      dispatch(searchInfo(searchQuery));
      navigate(`/searchMovies`);
    }
  };
  // #FCFCFC
  // #F7F7F7
  return (
    <main className="w-full">
      <header className="border dark:border-none shadow-2xl">
        <div
          className={`py-1 lg:py-3 xl:py-6 flex justify-between items-center w-full `}
        >
          <div className="px-2 mx-1 flex items-center gap-1 rounded-lg">
            <div
              className="px-1 inline-flex justify-center items-center gap-2 dark:text-white text-black
               cursor-pointer md:tracking-[3px]"
              onClick={() => {
                navigate("/");
                setSearchQuery("");
              }}
            >
             
                <p className="flex gap-2 justify-center items-center font-semibold">
                  <BiCameraMovie className=" dark:text-white text-black md:w-8 md:h-8 " />
                  PandaFlix
                </p>
             
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="hidden md:flex ">
              <ul className="hidden md:flex px-2 mx-1 dark:text-white text-black cursor-pointer gap-3">
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
            <div className="flex justify-start items-center">
              <input
                className="searchBar"
                type="search"
                placeholder="Search IMDB"
                value={searchQuery}
                onKeyUp={handleEnterKeySubmit}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <span className="flex p-2 text-2xl text-gray-700 cursor-pointer">
                <CiSearch
                  className="dark:text-white text-black"
                  onClick={() => {
                    handleSearchInput();
                  }}
                />
              </span>
            </div>
            <div className="flex items-center">
              <label className="inline-flex relative items-center mr-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer bg-black"
                  checked={enabled}
                  readOnly
                />
                <div
                  onClick={() => {
                    setEnabled(!enabled);
                    setDarkTheme(!darkTheme);
                  }}
                  className="w-11 h-6 bg-gray-800 rounded-full peer peer-focus:ring-gray-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
                 after:absolute after:top-0.5 after:left-[2px] after:bg-gray-600 after:border-gray-900 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:bg-gray-300"
                ></div>
              </label>
              <span className="flex mr-4 text-sm font-medium text-gray-900">
                {darkTheme ? (
                  <BsMoonStarsFill className="text-white w-4 h-4" />
                ) : (
                  <BsFillSunFill className="text-black -900 w-5 h-5 " />
                )}
              </span>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
