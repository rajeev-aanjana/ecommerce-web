import React from "react";

import { useNavigate } from "react-router-dom";

import { categoryImages } from "../../data/categoryData";

const CategoryCard = ({ category }) => {

  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-4xl">

      <img
        src={
          categoryImages[category.slug] ||

          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
        }

        alt={category.name || category.title}

        className="h-105 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

      {/* CONTENT */}
      <div className="absolute bottom-8 left-8 right-8">

        <h2 className="text-3xl font-semibold capitalize text-white">

          {category.name || category.title}

        </h2>

        <button
          onClick={() =>
            navigate(
              `/product-listing/${
                category.slug ||
                category.title.toLowerCase()
              }`
            )
          }

          className="mt-5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:opacity-90"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;