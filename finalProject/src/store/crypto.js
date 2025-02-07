import { createSlice } from "@reduxjs/toolkit";
import { cryptoFetch  } from "./cryptoFetch";


let cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptoArray: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cryptoFetch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(cryptoFetch.fulfilled, (state, action) => {
      state.cryptoArray = action.payload; 
      state.loading = false;
      state.error = null;
    });

    builder.addCase(cryptoFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || true; 
    });
  },
});

export default cryptoSlice.reducer;