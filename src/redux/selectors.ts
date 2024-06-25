import { RootState } from "./store";

export const selectSources = (state: RootState) => state.sources;
export const selectIsLoading = (state: RootState) => state.sources.isLoading;
