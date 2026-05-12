import { useState } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../../../store/searchFilterSlice";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navigate = useNavigate();

  const searchInput = useSelector((store) => store.search.search);
  const wishlistItems = useSelector((store) => store.wishlist.wishlist);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container-custom h-20  mx-20 flex items-center justify-between">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center gap-1 hover:bg-pink-200 hover:rounded-full transition-all cursor-pointer"
        >
          <div className="h-9 w-9 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
            C
          </div>

          <h1 className="text-2xl font-bold mb-5 tracking-tight text-gray-900">
            O
          </h1>
          <div className="h-9 w-9 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
            C
          </div>

          <h1 className="text-2xl font-bold tracking-tight mt-5 text-black">
            O
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-black transition-all"
          >
            Home
          </Link>

          <Link
            to="/all-categories"
            className="text-sm font-medium text-gray-700 hover:text-black transition-all"
          >
            All Categories
          </Link>
          <Link
            to="/product-listing"
            className="text-sm font-medium text-gray-700 hover:text-black transition-all"
          >
            All Products
          </Link>

          <Link
            to="/about-us"
            className="text-sm font-medium text-gray-700 hover:text-black transition-all"
          >
            About
          </Link>

          <Link
            to="/contact-us"
            className="text-sm font-medium text-gray-700 hover:text-black transition-all"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <input
            value={searchInput}
            onChange={(e) => dispatch(searchItem(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchInput.trim()) {
                navigate("/product-listing");
              }
            }}
            type="search"
            placeholder="Search products..."
            className="rounded-full w-70 border border-gray-300 bg-white p-2 text-sm outline-none transition-all"
          />
          <button
            onClick={() => {
              navigate(`/product-listing`);
            }}
            className="text-gray-700 hover:text-black transition-all"
          >
            <Search size={22} />
          </button>

          <button
            onClick={() => navigate("/wishlist")}
            className="relative text-gray-700 hover:text-black transition-all"
          >
            <Heart size={22} />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
              {wishlistItems.length}
            </span>
          </button>

          <button
            onClick={() => {
              navigate("/cart");
            }}
            className="relative text-gray-700 hover:text-black transition-all"
          >
            <ShoppingBag size={22} />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
              {cartItems.length }
            </span>
          </button>

          <button className="text-gray-700 hover:text-black transition-all">
            <User size={22} />
          </button>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-gray-800"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-screen border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-6 flex flex-col gap-6">
          <Link to="/" className="text-base font-medium text-gray-800">
            Home
          </Link>

          <Link
            to="/all-categories"
            className="text-base font-medium text-gray-800"
          >
            All Categories
          </Link>
          <Link
            to="/product-listing"
            className="text-base font-medium text-gray-800"
          >
            All Products
          </Link>

          <Link to="/about-us" className="text-base font-medium text-gray-800">
            About
          </Link>
          <Link
            to="/contact-us"
            className="text-base font-medium text-gray-800"
          >
            Contact
          </Link>

          <div className="flex items-center gap-5 pt-4 border-t border-gray-200">
            <Search size={22} className="text-gray-700" />
            <Heart size={22} className="text-gray-700" />
            <ShoppingBag size={22} className="text-gray-700" />
            <User size={22} className="text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
