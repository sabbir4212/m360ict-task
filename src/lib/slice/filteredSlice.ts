import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getFilteredFile:any = createAsyncThunk("filtered/flight", async (data) => {
    return data
})

const initialState = {
    filtered: [],
    FilLoading: false,
    error: null,
  };

  export const filteredSlice = createSlice({
    name: "flight",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getFilteredFile.pending, (state) => {
          state.FilLoading = true;
        })
        .addCase(getFilteredFile.fulfilled, (state, action) => {
          state.FilLoading = false;
          state.filtered = action.payload;
        })
        .addCase(getFilteredFile.rejected, (state, action) => {
          state.filtered = [];
          state.FilLoading = false;
          state.error = action.error;
        });
    },
  });
  
  export default filteredSlice.reducer;