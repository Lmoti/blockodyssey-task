import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./page-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: { search: searchSlice, page: pageSlice },
});

export default store;
