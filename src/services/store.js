import { configureStore } from "@reduxjs/toolkit";
import easySlice from "../features/easy/easySlice";
import hardSlice from "../features/hard/hardSlice";

const store = configureStore({
  reducer: {
    easy: easySlice,
    hard: hardSlice,
  },
});

export default store;
