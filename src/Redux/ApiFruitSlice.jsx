import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFruit = createAsyncThunk("fetch/fruit", async () => {
  const res = await axios.get(
    "https://api.jsonbin.io/v3/b/695137acd0ea881f4045506b"
  );
  return res.data;
});

const initialState = {
  item: [],
  loading: false,
  error: null,
};

const ApiFruitSlice = createSlice({
  name: "fruit",
  initialState,
  // reducers;{ },
  extraReducers: (builder) => {
    builder.addCase(fetchFruit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFruit.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(fetchFruit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default ApiFruitSlice.reducer;
