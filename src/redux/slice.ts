import { createSlice } from "@reduxjs/toolkit";
import { fetchSourceThunk } from "./operations";
import { Source } from "../lib/api";

export interface SourcesState {
  sources: Source[];
  isLoading: boolean;
  error: string | null;
}
const initialState: SourcesState = {
  sources: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "sources",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSourceThunk.fulfilled, (state, { payload }) => {
        const sourceArray: Source[] = payload;
        state.sources = sourceArray;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSourceThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSourceThunk.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = null;
        }
        state.isLoading = false;
      });
  },
});

export const sourcesReduser = slice.reducer;
