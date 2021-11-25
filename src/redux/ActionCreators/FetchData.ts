import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IForecast } from "../../types/typeResponse";
import { fetchDataSucces, fetchDataError } from "../Slice/Slice";

export const fetchData = createAsyncThunk(
  "weatherReducer/fetchData",
  async function (url: string, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.get<IForecast>(url);
      dispatch({
        type: fetchDataSucces,
        payload: response.data,
      });
      return response;
    } catch (er) {
      let e = (er as any).response;
      dispatch({
        type: fetchDataError,
        payload: {
          message: e.data.message,
          errorOccured: true,
        },
      });
      return rejectWithValue(e.message);
    }
  }
);

export default fetchData;
