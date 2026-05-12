import React from "react";
import './Cart.css'

import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import CartItem from "../../components/cart/CartItem/CartItem";
import OrderSummary from "../../components/cart/CartItem/OrderSummary";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">
            <ShoppingBag size={70} />
          </div>

          <h1>Your cart is empty</h1>

          <p>Looks like you haven’t added anything yet.</p>

          <button>Continue Shopping</button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-20 py-16">
      {/* TITLE */}
      <div className="mb-14">
        <h1 className="text-5xl font-bold text-gray-900">Shopping Cart</h1>

        <p className="mt-3 text-lg text-gray-500">{cartItems.length} Items</p>
      </div>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.5fr_420px]">
        {/* LEFT */}
        <CartItem />

        {/* RIGHT */}
        <OrderSummary />
      </div>
    </section>
  );
};

export default Cart;
