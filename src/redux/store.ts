import { configureStore } from "@reduxjs/toolkit";
import { sourcesReduser } from "./slice";

export const store = configureStore({
  reducer: {
    sources: sourcesReduser,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
