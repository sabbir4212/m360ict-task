import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IFlightState } from "../../utils/type/flightTypes";

export const getFlights: any = createAsyncThunk("getFlightData", async () => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return await res.json();
});

const initialState = {
  flight: [],
  isLoading: false,
  error: null,
};

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.flight = action.payload;
      })
      .addCase(getFlights.rejected, (state, action) => {
        state.flight = [];
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default flightSlice.reducer;
