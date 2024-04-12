import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
       state.currentlyFetching = true;
    },
    markFetchDone: (state) => {
       state.fetchDone = true;
    },
    markFetchingFinished: (state) => {
       state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions
export default fetchStatusSlice;
