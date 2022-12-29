import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/movie/${data.imdbID}`);
  };
  return (
    <div className="mx-auto flex justify-center items-center cursor-pointer ">
      {/* <Link to ={`/movie/${data.imdbID}`}> */}
      <main className="" onClick={onCardClick}>
        <div className="">
          <img src={data.Poster} alt={data.Title} className="h-96 mx-auto " />
        </div>
        <div className=" py-3 mx-auto  text-white">
          <h4>{data.Title}</h4>
          <p className="uppercase">{data.Type}</p>
          <p>Released in :{data.Year}</p>
        </div>
      </main>
      {/* </Link> */}
    </div>
  );
};

export default MovieCard;
