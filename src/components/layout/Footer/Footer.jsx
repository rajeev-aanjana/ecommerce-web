import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#fafafa]">
      <div className="container-custom py-16 mx-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                C
              </div>

              <h2 className="text-2xl font-bold mb-5 tracking-tight text-gray-900">
                O
              </h2>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                C
              </div>

              <h2 className="text-2xl font-bold mt-5 tracking-tight text-gray-900">
                O
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Discover premium fashion, beauty, and lifestyle
              products crafted for modern living and timeless
              elegance.
            </p>

          </div>

          {/* SHOP */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Shop
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/product-listing"
                  className="text-sm text-gray-500 transition-all hover:text-black"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/all-categories"
                  className="text-sm text-gray-500 transition-all hover:text-black"
                >
                  New Arrivals
                </Link>
              </li>


              <li>
                <Link
                  to="/all-categories"
                  className="text-sm text-gray-500 transition-all hover:text-black"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Company
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/about-us"
                  className="text-sm text-gray-500 transition-all hover:text-black"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="text-sm text-gray-500 transition-all hover:text-black"
                >
                  Contact
                </Link>
              </li>


              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 transition-all hover:text-black"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Stay Updated
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-500">
              Subscribe to get exclusive offers, new arrivals,
              and premium lifestyle updates.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm outline-none transition-all focus:border-black"
              />

              <button className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-6 md:flex-row">
          
          <p className="text-sm text-gray-500">
            © 2026 Velora. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/about-us"
              className="text-sm text-gray-500 transition-all hover:text-black"
            >
              Terms
            </Link>

            <Link
              to="/about-us"
              className="text-sm text-gray-500 transition-all hover:text-black"
            >
              Privacy
            </Link>

            <Link
              to="/contact-us"
              className="text-sm text-gray-500 transition-all hover:text-black"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;