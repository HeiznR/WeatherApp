import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError } from "../../types/typeError";
import { IForecast } from "../../types/typeResponse";

interface IInitial {
  data: IForecast;
  error: IError;
}

const initialState = {
  data: {
    city: { name: "", country: "" },
    list: [
      {
        main: { temp: 0, temp_max: 0, temp_min: 0 },
        weather: [{ description: "", icon: "" }],
        wind: { speed: 0 },
      },
    ],
  },
  error: {
    message: "",
    errorOccured: false,
  },
} as IInitial;

const dataWeatherSlice = createSlice({
  name: "weatherReducer",
  initialState,
  reducers: {
        fetchDataSucces(state, action: PayloadAction<IForecast>) {
      state.data = action.payload;
    },
    fetchDataError(state, action: PayloadAction<IError>) {
      state.error = action.payload;
    },
  },
 
});

export default dataWeatherSlice.reducer;
export const { fetchDataSucces, fetchDataError } = dataWeatherSlice.actions;
