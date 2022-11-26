import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "../lib/slice/flightSlice";
import filteredSlice from "../lib/slice/filteredSlice";

const store = configureStore({
  reducer: {
    flights: flightSlice,
    filteredFlight: filteredSlice
  },
});
export default store;
