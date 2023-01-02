import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error404 from "../images/vadivel.jpg";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/movie/${data.imdbID}`);
  };

  return (
    <div className="mx-auto flex cursor-pointer ">
      <main className="flex flex-col h-full" onClick={onCardClick}>
        <div className="text-center">
          <img
            src={data.Poster == "N/A" ? Error404 : data.Poster}
            alt={data.Title}
            className=" h-72 md:h-96"
          />
        </div>
        <div className="px-2 py-3 mx-auto flex flex-col w-full h-20 bg-[#151619] text-white tracking-wide">
          <p className="font-light text-sm">{data.Title}</p>
          <p className="py-1 text-[#9CAAB3] text-sm">Released Date: {data.Year}</p>
        </div>
      </main>
    </div>
  );
};

export default MovieCard;
