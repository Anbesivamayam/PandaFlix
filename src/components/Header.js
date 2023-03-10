import React, { useEffect, useState } from "react";
import { WalletCheckO } from "lovedicons/dist/outline";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci"; // icons
import { SiFoodpanda } from "react-icons/si"; // icons
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs"; // icons
import { searchInfo } from "../features/movieSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Header = ({ darkTheme, setDarkTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchInput = () => {
    if (searchQuery.trim() === "") {
      toast.error("Type something to search in the Database");
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

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <main className="w-full">
      <header className="border dark:border-none shadow-2xl">
        <div
          className={`py-1 lg:py-3 xl:py-4 flex justify-between items-center w-full `}
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
              <p className="flex gap-2 justify-center items-center font-semibold text-sm md:text-base">
                <SiFoodpanda className=" dark:text-white text-black md:w-8 md:h-8 bounce" />
                PandaFlix
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="hidden md:flex ">
              <ul className="flex px-2 mx-1 dark:text-white text-black cursor-pointer gap-3">
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("/movielibrary");
                  }}
                >
                  Movies
                </li>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("/serieslibrary");
                  }}
                >
                  Series
                </li>
                <li
                  className="navbar"
                  onClick={() => {
                    navigate("/pricing");
                  }}
                >
                  Pricing
                </li>
              </ul>
            </div>
            <div className="flex justify-start items-center px-2">
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
            <div className="hidden md:flex items-center">
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
              <span className="flex mr-4 text-sm font-medium text-gray-900 animate-pulse">
                {darkTheme ? (
                  <BsMoonStarsFill className="text-white w-4 h-4" />
                ) : (
                  <BsFillSunFill className="text-black -900 w-5 h-5 " />
                )}
              </span>
            </div>
            <div
              className="flex md:hidden pr-3"
              onClick={() => {
                setEnabled(!enabled);
                setDarkTheme(!darkTheme);
              }}
            >
              {darkTheme ? (
                <BsMoonStarsFill className="text-white w-4 h-4" />
              ) : (
                <BsFillSunFill className="text-black -900 w-5 h-5 " />
              )}
            </div>
            <div
              className="md:hidden mr-5 dark:text-white text-black"
              onClick={toggleMenu}
            >
              {showNav ? (
                <RiCloseFill className="w-[24px] h-[24px] cursor-pointer" />
              ) : (
                <HiMenuAlt3 className="w-[24px] h-[24px] cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </header>

      <section
        className={`${showNav ? "md:hidden w-full h-screen": "h-0 opacity-0"} px-2 transition-all ease-in duration-500`}
      >
        <div className="flex ">
          <ul className="w-full flex flex-col px-2 py-3 mx-1 dark:text-white text-black cursor-pointer gap-3">
            <li
              className="navbar border-2 hover:translate-x-3"
              onClick={() => {
                navigate("/");
                setShowNav(false);
              }}
            >
              Home
            </li>
            <li
              className="navbar border-2 hover:translate-x-3"
              onClick={() => {
                navigate("/movielibrary");
                setShowNav(false);
              }}
            >
              Movies
            </li>
            <li
              className="navbar border-2 hover:translate-x-3"
              onClick={() => {
                navigate("/serieslibrary");
                setShowNav(false);
              }}
            >
              Series
            </li>
            <li
              className="navbar border-2 hover:translate-x-3"
              onClick={() => {
                navigate("/pricing");
                setShowNav(false);
              }}
            >
              Pricing
            </li>
            <li
              className="navbar border-2 hover:translate-x-3"
              onClick={() => {
                setShowNav(false);
              }}
            >
              <a href='https://www.linkedin.com/in/arunprasad007' target={"_blank"}> Contact Dev</a>
              
            </li>
            <li
              className="navbar border-2 hover:translate-x-3"
              onClick={() => {
                setShowNav(false);
              }}
            >
             <a href='https://www.imdb.com' target={"_blank"}>Visit IMDB</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Header;
