import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = globalSlice.actions;
export default globalSlice.reducer;
