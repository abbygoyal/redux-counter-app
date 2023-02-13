import { createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    Inc: (state, action) => {
      return (state += 1);
    },
    Incby25: (state, action) => {
      return (state += action.payload);
    },
    setReset: (state, action) => {
      return (state = action.payload);
    },
    Decby25: (state, action) => {
      return (state -= action.payload);
    },
    Dec: (state, action) => {
      return (state -= 1);
    },
  },
});

export const { Inc, Dec, Incby25, Decby25, setReset } = counterReducer.actions;
export default counterReducer.reducer;
