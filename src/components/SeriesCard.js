import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SeriesCard = ({ data }) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/movie/${data.imdbID}`);
  };
  return (
    <div>
      <main>
        <div className="mx-auto flex justify-center items-center cursor-pointer ">
          <main className="" onClick={onCardClick}>
            <div className="">
              <img
                src={data.Poster}
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
        </div>
      </main>
    </div>
  );
};

export default SeriesCard;
