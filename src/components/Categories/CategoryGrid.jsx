import React from "react";

import { useNavigate } from "react-router-dom";

import CategoryCard from "./CategoryCard";

const CategoryGrid = ({
  title,
  subtitle,
  categories,
  showViewAll = false,
  bgColor = "bg-white",
}) => {
  const navigate = useNavigate();

  return (
    <section className={`${bgColor} py-14`}>
      <div className=" mb-14 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>

          <p className="mt-3 text-gray-500">{subtitle}</p>
        </div>

        {showViewAll && (
          <button
            onClick={() => navigate("/all-categories")}
            className="hidden text-sm font-semibold text-gray-900 md:block"
          >
            View All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug || category.title}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
