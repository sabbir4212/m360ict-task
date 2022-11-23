import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "../lib/slice/flightSlice";

const store = configureStore({
  reducer: {
    flights: flightSlice,
  },
});
export default store;
