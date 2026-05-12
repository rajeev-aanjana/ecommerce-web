
import React, {
  useEffect,
  useState,
} from "react";
import CategoryGrid from "./CategoryGrid";
import useAllCategory from "../../hooks/useAllCategory";


const AllCategories = () => {

 const categories = useAllCategory()

  return (
    <div className="mx-20">
    <CategoryGrid
      title="Explore Categories"
      subtitle="Discover premium collections designed for every lifestyle."
      categories={categories}
    />
    </div>
  );
};

export default AllCategories;