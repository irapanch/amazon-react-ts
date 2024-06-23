import { createSlice } from "@reduxjs/toolkit";
import { Source, fetchSourceThunk } from "./operations";

interface SourcesState {
  sources: Source[];
  isLoading: boolean;
  error: string | null;
}

interface SourcesState {
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
    builder.addCase(fetchSourceThunk.fulfilled, (state, { payload }) => {
      const sourceArray: Source[] = payload;
      state.sources = sourceArray;
    });
  },
});

export const sourcesReduser = slice.reducer;
