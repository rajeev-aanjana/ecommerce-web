import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.wishlist.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearAllWishlist: (state, action) => {
      state.wishlist.length = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearAllWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
