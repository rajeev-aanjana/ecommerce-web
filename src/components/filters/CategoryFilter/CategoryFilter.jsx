import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

import { useNavigate } from "react-router-dom";
import useAllCategory from "../../../hooks/useAllCategory";

const CategoryFilter = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const categories = useAllCategory();

  return (
    <div className="relative">
      {/* FILTER BUTTON */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-black"
      >
        Filter by Category
        <ChevronDown
          size={18}
          className={`transition-all duration-300 ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {showDropdown && (
        <div className="absolute right-0 top-16 z-50 w-64 overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl">
          <div className="space-y-2 h-55 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  navigate(`/product-listing/${category.slug}`);

                  setShowDropdown(false);
                }}
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-sm font-medium capitalize text-gray-700 transition-all hover:bg-black hover:text-white"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
