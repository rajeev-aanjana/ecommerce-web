import { ArrowRight } from "lucide-react";
import { Link, redirect, useNavigate } from "react-router-dom";

const AboutUs = () => {

    const navigate = useNavigate()
  return (
    <section className="bg-white mx-20">
      
      <div className="container-custom section-padding grid items-center gap-16 lg:grid-cols-2">
        
        <div>
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            About CoCo
          </span>

          <h1 className="hero-title max-w-xl text-gray-900">
            Elevating Everyday Shopping Into A Premium Experience
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
            At CoCo, we blend timeless fashion, premium
            beauty, and modern lifestyle essentials to create
            a seamless and elegant shopping experience for
            everyone.
          </p>

          <button onClick={()=>navigate('/categories')} className="mt-8 flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all hover:opacity-90">
            Explore Collections
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="overflow-hidden rounded-4xl mt-2">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
            alt="about"
            className="h-150 w-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#fafafa]">
        <div className="container-custom section-padding">
          
          <div className="mb-16 text-center">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl mt-20">
              Why Choose <span className="bg-pink-500 p-1 rounded-4xl text-white">CoCo</span>
            </h2>

            <p className="section-subtitle mx-auto max-w-2xl mt-5">
             " We focus on premium quality, seamless user
              experience, and modern fashion-forward products. "
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="card p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Premium Quality
              </h3>

              <p className="leading-7 text-gray-500">
                Carefully curated collections crafted with
                modern aesthetics and premium materials.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Fast Delivery
              </h3>

              <p className="leading-7 text-gray-500">
                Seamless shopping experience with reliable
                and fast order delivery across regions.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="mb-4 text-2xl font-semibold">
                Modern Experience
              </h3>

              <p className="leading-7 text-gray-500">
                Designed with clean aesthetics and intuitive
                user experiences for modern shoppers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="overflow-hidden rounded-[36px] bg-black px-10 py-16 text-center text-white md:px-20">
          
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Discover Fashion, Beauty & Lifestyle In One Place
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Join thousands of shoppers exploring premium
            collections every day with CoCo.
          </p>

          <button onClick={()=>{navigate('/')}} className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:opacity-90">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;