// RatingFilter.jsx

import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

const RatingFilter = ({ products, setRatingFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const ratings = [2.5, 3.5, 4.5];

  const filterByRatings = (rate) => {
    setRatingFilter(rate);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-black"
      >
        Filter by Ratings ⭐
        <ChevronDown
          size={18}
          className={`transition-all duration-300 ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </button>

      {showDropdown && (
        <div className="absolute right-0 top-16 z-50 w-64 overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl">
          <div className="space-y-2">
            <button
              onClick={() => {
                setRatingFilter(products);

                setShowDropdown(false);
              }}
              className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-medium text-gray-700 transition-all hover:bg-black hover:text-white"
            >
              All Ratings
            </button>

            {ratings.map((rate) => (
              <button
                key={rate}
                onClick={() => filterByRatings(rate)}
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-medium text-gray-700 transition-all hover:bg-black hover:text-white"
              >
                Above {rate} ⭐
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
