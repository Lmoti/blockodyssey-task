import { createSlice } from "@reduxjs/toolkit";

const initialPageState = { limit: 10, page: 1 };

const pageSlice = createSlice({
  name: "page",
  initialState: initialPageState,
  reducers: {
    setPage(state, action) {
      const value = action.payload;
      state.page = value;
    },
    setLimit(state, action) {
      const value = action.payload;
      state.limit = value;
    },
  },
});

export const pageActions = pageSlice.actions;
export default pageSlice.reducer;
