import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, decreaseCartItem, removeCartItem } from "../../../store/cartSlice";

const CartItem = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
  return (
    <>
      <div className="flex flex-col gap-6">
        {cartItems.map((item) => {
          const discountedPrice = (
            item.price -
            (item.price * item.discountPercentage) / 100
          ).toFixed(2);

          return (
            <div
              key={item.id}
              className="flex flex-col gap-6 rounded-[36px] border border-gray-200 p-6 transition-all hover:shadow-xl md:flex-row"
            >
              {/* IMAGE */}
              <div className="h-80 overflow-hidden rounded-[28px] bg-[#f8fafc] md:h-55 md:w-55 md:min-w-55">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col justify-between">
                {/* TOP */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold capitalize text-gray-700">
                      {item.category}
                    </span>

                    <h2 className="mt-5 text-3xl font-semibold text-gray-900">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-gray-500">{item.brand}</p>
                  </div>

                  <button onClick={()=>dispatch(removeCartItem(item.id))} className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all hover:bg-black hover:text-white">
                    <Trash2 size={20} />
                  </button>
                </div>

                {/* BOTTOM */}
                <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  {/* PRICE */}
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      ${discountedPrice}
                    </h3>

                    <span className="text-lg text-gray-400 line-through">
                      ${item.price}
                    </span>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-5 rounded-full border border-gray-300 px-5 py-3">
                    <button onClick={()=>dispatch(decreaseCartItem(item.id))} className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-all hover:bg-black hover:text-white">
                      <Minus size={16} />
                    </button>

                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button onClick={()=>{dispatch(addCartItem(item))}} className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-all hover:bg-black hover:text-white">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartItem;
