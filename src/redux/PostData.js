import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postData = createAsyncThunk("postData", async (payload) => {
  console.log("Store:", payload);
  const res = await fetch(payload.url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(payload.data),
  });
  const data = await res.json();
  return data;
});

export const postDataSlice = createSlice({
  name: "postData",
  initialState: { data: [], status: "" },
  extraReducers: {
    [postData.pending]: (state, action) => {
      state.status = "pending";
    },
    [postData.fulfilled]: (state, action) => {
      (state.status = "success"), (state.data = action.payload);
    },
    [postData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postDataSlice.reducer;
