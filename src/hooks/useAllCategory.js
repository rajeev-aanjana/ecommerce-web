import React, { useEffect, useState } from "react";

const useAllCategory = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");

    const json = await res.json();

    setCategories(json);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categories;
};

export default useAllCategory;
