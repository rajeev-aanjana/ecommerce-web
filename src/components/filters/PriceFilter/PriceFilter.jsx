import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

const PriceFilter = ({
  resetPriceFilter,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      {/* FILTER BUTTON */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-black"
      >
        Filter by Price
        <ChevronDown
          size={18}
          className={`transition-all duration-300 ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {showDropdown && (
        <div className="absolute right-0 top-16 z-50 w-[320px] rounded-[28px] border border-gray-200 bg-white p-6 shadow-2xl">
          {/* HEADING */}
          <h2 className="text-lg font-semibold text-gray-900">Price Range</h2>

          <p className="mt-2 text-sm text-gray-500">
            Filter products within your budget.
          </p>

          {/* INPUTS */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {/* MIN PRICE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Min Price
              </label>

              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-black"
              />
            </div>

            {/* MAX PRICE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Max Price
              </label>

              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="1000"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-black"
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex gap-3">
            {/* RESET */}
            <button
              onClick={() => {
                resetPriceFilter();

                setShowDropdown(false);
              }}
              className="flex-1 rounded-full border border-gray-300 bg-black px-5 py-3 text-sm font-semibold text-white transition-all hover:border-black"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
