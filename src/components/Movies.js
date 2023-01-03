import React, { useEffect, useState } from "react";

const getPosterURL = (posterPath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};
const Movies = ({ poster_path, title, release_date, name, vote_average }) => {
  return (
    <div className="flex flex-col mx-auto  gap-2 text-white scrollbar hover:opacity-[0.5] transistion-all duration-500 ease-in  ">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="w-[160px] h-[230px] shadow-sm rounded-md"
      />
      <main className="flex flex-col px-3 w-[160px] text-[13px]">
        <p className=" text-center font-light ">{title || name}</p>
        {/* <p className="">{release_date}</p> */}
      </main>
    </div>
  );
};

export default Movies;
