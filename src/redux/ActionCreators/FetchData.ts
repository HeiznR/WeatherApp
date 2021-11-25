import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IForecast } from "../../types/typeResponse";
import { fetchDataSucces, openPopUpWithDataError } from "../Slice/Slice";

export const fetchData = createAsyncThunk(
  "weatherReducer/fetchData",
  async function (url: string, { dispatch }) {
    try {
      const response = await axios.get<IForecast>(url);
      dispatch(fetchDataSucces(response.data));
      return;
    } catch (error) {
      dispatch(openPopUpWithDataError("city not found"));
      return;
    }
  }
);

export default fetchData;
