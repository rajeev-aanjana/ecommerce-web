// CheckoutSuccess.jsx

import React from "react";

import { CheckCircle2, ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#fafafa] px-6">
      <div className="w-full max-w-3xl rounded-[40px] border border-gray-200 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={60} className="text-green-600" />
        </div>

        <h1 className="mt-10 text-5xl font-bold text-gray-900">
          Thank You For Visiting 🚀
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          That’s it for this Ecommerce Frontend Project.
          <br />
          <br />
          This application was built using React, Redux Toolkit, Custom Hooks,
          Tailwind CSS, and modern frontend development practices.
          <br />
          <br />
          As mentioned in the assignment, this project focuses only on the
          frontend implementation without backend integration.
          <br />
          <br />
          Thank you for taking the time to explore the application ❤️
        </p>

        <button
          onClick={() => navigate("/")}
          className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-black px-10 py-5 text-sm font-semibold text-white transition-all hover:opacity-90"
        >
          <ArrowLeft size={18} />
          Back To Home
        </button>
      </div>
    </section>
  );
};

export default Checkout;
