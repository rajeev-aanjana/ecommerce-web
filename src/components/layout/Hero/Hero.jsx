import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="overflow-hidden mb-25">
        <div className="container-custom grid items-center gap-16 section-padding lg:grid-cols-2">
          <div>
            <span className="mb-10 inline-flex rounded-full text-4xl font-bold">
              Premium Lifestyle Collection
            </span>

            <h1 className="hero-title max-w-2xl text-gray-900">
              Elevate Your Style With Modern Luxury
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Discover curated fashion, beauty, and lifestyle essentials crafted
              for modern living and timeless elegance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={() => {
                  navigate("/product-listing");
                }}
                className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all hover:opacity-90"
              >
                Shop Now
              </button>

              <button
                onClick={() => {
                  document.getElementById("categories")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition-all hover:border-black"
              >
                Explore Collections
                <ArrowRight size={18} />
              </button>
            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">10K+</h3>

                <p className="mt-2 text-sm text-gray-500">Premium Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">25K+</h3>

                <p className="mt-2 text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>

                <p className="mt-2 text-sm text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-125 w-125 rounded-full bg-gray-100"></div>

            <div className="relative overflow-hidden rounded-[40px]">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
                alt="hero"
                className="h-155 w-full object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-xl">
              <p className="text-sm text-gray-500">Trending Collection</p>

              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                Summer Essentials
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="container-custom section-padding">
          <div className="overflow-hidden rounded-[40px] bg-black px-10 py-20 text-center text-white md:px-20">
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Experience Shopping Designed For Modern Living
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Explore premium products crafted to elevate your everyday style
              and lifestyle experience.
            </p>

            <button onClick={()=> navigate('/product-listing')} className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:opacity-90">
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
