import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error404 from "../images/vadivel.jpg"

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
          <img
            src={
              data.Poster == "N/A"
                ? Error404
                // "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1672305744~exp=1672306344~hmac=56d3cda818fbd3d92c4c1887d51fc942f909ee3c99e778aa6d4a3e620178713f "
                : data.Poster
            }
            alt={data.Title}
            className="h-96 mx-auto "
          />
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
