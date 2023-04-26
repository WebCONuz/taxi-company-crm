import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("getData", async (payload) => {
  const res = await fetch(payload.url);
  const data = await res.json();
  return data;
});

export const getDataSlice = createSlice({
  name: "getData",
  initialState: { data: [], status: "" },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "pending";
    },
    [getData.fulfilled]: (state, action) => {
      (state.status = "success"), (state.data = action.payload);
    },
    [getData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default getDataSlice.reducer;
