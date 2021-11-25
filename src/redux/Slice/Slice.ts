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
    openPopUpWithDataError(state, action: PayloadAction<string>) {
      state.error.message = action.payload;
      state.error.errorOccured = true;
    },
    closePopUp(state) {
      state.error.errorOccured = false;
    },
  },
});

export default dataWeatherSlice.reducer;
export const { fetchDataSucces, openPopUpWithDataError, closePopUp } =
  dataWeatherSlice.actions;
