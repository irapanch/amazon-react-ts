import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Source } from "../lib/api";

const sources = axios.create({
  baseURL: "https://amazon-node-mongodb.onrender.com/api/",
});
export const fetchSourceThunk = createAsyncThunk<Source[], void, {}>(
  "fetchSources",
  async (_, thunkAPI: any) => {
    try {
      const res: AxiosResponse<{ data: Source[] }> = await sources.get(
        "/sources"
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get data`s error");
    }
  }
);
