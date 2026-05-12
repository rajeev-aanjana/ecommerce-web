import React from "react";

const Pagination = ({currentPage, setCurrentPage, noOfPages}) => {
  return (
    <>
      <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
        {[...Array(noOfPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition-all

        ${
          currentPage === num
            ? "bg-black text-white border-black"
            : "border-gray-300 bg-white text-gray-700 hover:border-black"
        }
      `}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
