import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface Source {
  name: string;
  id: string;
  createdAt: string;
  spend: number;
  conversion: number;
  session: number;
}
interface ApiResponse {
  data: Source[];
}
const sources = axios.create({
  baseURL: "https://662b9468de35f91de158c264.mockapi.io/",
});
export const fetchSourceThunk = createAsyncThunk<ApiResponse, void, {}>(
  "fetchSources",
  async (_, thunkAPI) => {
    try {
      const res: AxiosResponse<ApiResponse> = await sources.get("/advertize");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get data`s error");
    }
  }
);
