import React, { useEffect, useState } from "react";

const getPosterURL = (posterPath)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
}
const Movies = ({ poster_path,title, release_date }) => {
  return (
    <div className="flex flex-col pl-5 gap-2 text-white ">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="w-[150px] h-[225px] shadow-sm rounded-md"
      />
      <main className="flex flex-col px-3 w-[160px] text-sm">
        <p className="text-white font-bold">{title}</p>
        {/* <p className="">{release_date}</p> */}
      </main>
    </div>
  );
};

export default Movies;
