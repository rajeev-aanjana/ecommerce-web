import React from "react";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "lucide-react";
import { clearAllWishlist } from "../../store/wishlistSlice";

const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlist.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-between mx-20 m-10">
        <div>
          <h1 className="text-4xl font-bold capitalize text-gray-900">
            Your Wishlist 😍
          </h1>

          <p className="mt-3 text-gray-500">Add more premium collections.</p>
        </div>
        {wishlistItems.length > 0 && (
          <div className="">
            <button
              className="bg-red-600 text-white font-bold p-3 rounded-full hover:bg-red-800"
              onClick={() => {
                dispatch(clearAllWishlist());
              }}
            >
              Clear Wishlist 🫣
            </button>
          </div>
        )}
      </div>
      <div className="mx-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <ProductCard deleteIcon={true} product={item} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              No Products Found
            </h2>

            <p className="mt-4 text-gray-500">
              Please first add items to wishlist 🥲
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
