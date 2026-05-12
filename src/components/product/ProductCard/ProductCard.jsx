import { Heart, Star, ShoppingBag, Delete, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../store/wishlistSlice";
import { addCartItem } from "../../../store/cartSlice";

const ProductCard = ({ product, deleteIcon = false }) => {
  const wishlistItem = useSelector((store) => store.wishlist.wishlist);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const {
    id,
    title,
    brand,
    price,
    discountPercentage,
    rating,
    thumbnail,
    stock,
    category,
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );

  return (
    <div className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden bg-[#f8fafc]">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-xs font-semibold capitalize text-gray-700 shadow-sm">
          {category}
        </span>
        {deleteIcon ? (
          <button
            onClick={() => dispatch(removeFromWishlist(product.id))}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-red-700 hover:text-white"
          >
            <Trash2 size={18} />
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-black hover:text-white"
          >
            <Heart size={18} />
          </button>
        )}

        <Link to={`/product/${id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
          {brand}
        </p>

        <Link to={`/product/${id}`}>
          <h2 className="mt-2 line-clamp-1 text-lg font-semibold text-gray-900 transition-all hover:text-black">
            {title}
          </h2>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-medium text-gray-700">
                {rating}
              </span>
            </div>
          </div>

          <span
            className={`text-sm font-medium ${
              stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <h3 className="text-2xl font-bold text-gray-900">
            ${discountedPrice}
          </h3>

          <span className="text-base text-gray-400 line-through">${price}</span>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500">
            {discountPercentage.toFixed(0)}% OFF
          </span>
        </div>

        <button
          onClick={() => dispatch(addCartItem(product))}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-all hover:opacity-90"
        >
          <ShoppingBag size={18} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
