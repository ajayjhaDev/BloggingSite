import { configureStore } from "@reduxjs/toolkit";
import bloggingSlice from "./blogging-slice";

const store = configureStore({
  reducer: { blogging: bloggingSlice.reducer },
});

export default store;
