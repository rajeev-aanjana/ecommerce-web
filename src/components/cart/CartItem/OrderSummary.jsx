import { ArrowRight } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const shipping = 20;

  const subtotal = cartItems.reduce((acc, item) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;

    return acc + discountedPrice * item.quantity;
  }, 0);
  const total = subtotal + shipping;
  return (
    <>
      <div className="sticky top-28 h-fit rounded-[36px] border border-gray-200 p-9">
        <h2 className="text-3xl font-bold text-gray-900">Order Summary</h2>

        <div className="mt-10 flex items-center justify-between text-gray-600">
          <span>Subtotal</span>

          <span className="font-semibold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between text-gray-600">
          <span>Shipping</span>

          <span className="font-semibold text-gray-900">
            {cartItems.length > 0 ? `${shipping}` : "$0.00"}
          </span>
        </div>

        <div className="my-8 h-px bg-gray-200"></div>

        <div className="flex items-center justify-between text-2xl font-bold text-gray-900">
          <span>Total</span>

          <span>{cartItems.length > 0 ? `${total.toFixed(2)}` : "$0.00"}</span>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-10 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-black text-sm font-semibold text-white transition-all hover:opacity-90"
        >
          Proceed To Checkout
          <ArrowRight size={18} />
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
