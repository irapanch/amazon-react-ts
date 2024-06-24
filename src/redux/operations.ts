import {
  ThunkDispatch,
  UnknownAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface Source {
  name: string;
  id: string;
  createdAt: string;
  spend: number;
  conversion: number;
  session: number;
}
// interface ApiResponse {
//   data: Source[];
// }
const sources = axios.create({
  baseURL: "https://662b9468de35f91de158c264.mockapi.io/",
});
export const fetchSourceThunk = createAsyncThunk<Source[], void, {}>(
  "fetchSources",
  async (_, thunkAPI: any) => {
    try {
      const res: AxiosResponse<{ data: Source[] }> = await sources.get(
        "/advertize"
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get data`s error");
    }
  }
);
