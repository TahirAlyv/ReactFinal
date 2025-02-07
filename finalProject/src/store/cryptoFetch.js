import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const cryptoFetch = createAsyncThunk('content/completedListFetch', async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      console.log(response.data); 
      return response.data.data;  
    } catch (error) {
      console.error(error);  
      return rejectWithValue(error.response?.data || error.message);
    }
  });