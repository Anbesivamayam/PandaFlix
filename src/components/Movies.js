import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Movies = ({ poster_path, title, release_date, name, vote_average,id }) => {
const navigate = useNavigate();

  const onCardClick = () => {
    // navigate(`/movie/${id}`);
    navigate(`*`);
  };
  const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`; 
  };
  return (
    <div className="flex flex-col mx-auto gap-2 xl:gap-3 text-black dark:text-white border-[1px] dark:border-gray-900 rounded-lg
    scrollbar hover:opacity-[0.8] dark:hover:opacity-[0.5] transistion-all duration-500 ease-in cursor-pointer shadow-lg hover:translate-x-1
    xl:hover:translate-x-2"
    onClick={onCardClick}
    >
      <main className="">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="w-[170px] h-[230px] xl:w-[240px] xl-h[310px] shadow-sm dark:rounded-md "
      />
      <main className="flex flex-col px-3 py-2 xl:py-3 w-[160px] text-[13px] ">
        <p className=" text-center font-semibold ">{title || name}</p>    
      </main>
      </main>
      {/* <p>{id}</p> */}
    </div>
  );
};

export default Movies;
