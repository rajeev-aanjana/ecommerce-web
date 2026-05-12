import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryFilter from "../../components/filters/CategoryFilter/CategoryFilter";
import PriceFilter from "../../components/filters/PriceFilter/PriceFilter";
import Pagination from "../../components/layout/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import RatingFilter from "../../components/filters/RatingFilter/RatingFilter";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";

const ProductListing = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchInput = useSelector((store) => store.search.search);
  const [ratingFilter, setRatingFilter] = useState(null);

  const [debouncedSearch, setDebouncedSearch] = useState(searchInput);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  //MIN & MAX Filter
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const PAGE_SIZE = 16;

  const { category } = useParams();

  const fetchAllProducts = async (page) => {
    const skip = page * PAGE_SIZE;
    let url = "";

    if (debouncedSearch.trim()) {
      url = `https://dummyjson.com/products/search?q=${debouncedSearch}`;
    } else if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${PAGE_SIZE}&skip=${skip}`;
    } else {
      url = `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`;
    }

    const res = await fetch(url);

    const json = await res.json();

    setAllProducts(json?.products);
    setTotalProducts(json.total);
  };

  useEffect(() => {
    fetchAllProducts(currentPage);
  }, [currentPage, category, debouncedSearch]);

  //Filter by Price
  useEffect(() => {
    const filtered = allProducts.filter((item) => {
      const matchesMin =
        minPrice === "" ? true : item.price >= Number(minPrice);

      const matchesMax =
        maxPrice === "" ? true : item.price <= Number(maxPrice);

      return matchesMin && matchesMax;
    });

    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, allProducts]);

  // RESET FILTER
  const resetPriceFilter = () => {
    setMinPrice("");

    setMaxPrice("");

    setFilteredProducts(allProducts);
  };

  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  //Filter By Rating
  const ratingFilteredProducts = ratingFilter
    ? filteredProducts.filter((item) => item.rating >= ratingFilter)
    : filteredProducts;

  console.log(ratingFilter);

  return (
    <section className="py-14">
      <div className="flex justify-between mx-20 mb-10">
        <div>
          <h1 className="text-4xl font-bold capitalize text-gray-900">
            {category ? `${category} Products` : "All Products"}
          </h1>

          <p className="mt-3 text-gray-500">
            Explore premium collections curated for you.
          </p>
        </div>
        <CategoryFilter />
        <PriceFilter
          setMinPrice={setMinPrice}
          resetPriceFilter={resetPriceFilter}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <RatingFilter
          products={filteredProducts}
          setRatingFilter={setRatingFilter}
        />
      </div>

      {/* PRODUCT GRID */}
      <ProductGrid ratingFilteredProducts={ratingFilteredProducts} />

      {/* Pagination */}
      {!debouncedSearch.trim() && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          noOfPages={noOfPages}
        />
      )}
    </section>
  );
};

export default ProductListing;
