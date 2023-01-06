import React from "react";

const Pagination = ({ itemsPerPage, totalPages, pagination, currentPage,handleClick }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <main>
      <ul className="flex flex-wrap gap-2 cursor-pointer  items-center  ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={` ${
              number == currentPage
                ? "text-cyan-400 border-black dark:border-cyan-400 border-[1px]"
                : "text-black dark:text-white"
            }  px-3`}
            onClick={() => {
              pagination(number)
              handleClick()
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Pagination;
