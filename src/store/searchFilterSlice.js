import { createSlice } from "@reduxjs/toolkit";

const searchFilterSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    searchItem: (state, action) => {
        state.search = action.payload
    },
  },
});

export const {searchItem} = searchFilterSlice.actions

export default searchFilterSlice.reducer