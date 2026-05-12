import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
    },
    decreaseCartItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addCartItem, removeCartItem, emptyCart, decreaseCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
