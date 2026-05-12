import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ ratingFilteredProducts }) => {
  return (
    <>
      <div className="mx-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ratingFilteredProducts.length > 0 ? (
          ratingFilteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              No Products Found
            </h2>

            <p className="mt-4 text-gray-500">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
