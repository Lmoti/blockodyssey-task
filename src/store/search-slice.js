import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = { condition: "all", keyword: "" };

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setCondition(state, action) {
      const value = action.payload;
      state.condition = value;
    },
    setKeyword(state, action) {
      const value = action.payload;
      state.keyword = value;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
