import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataWeatherSlice from "./Slice/Slice";
const rootReducer = combineReducers({
  weather: dataWeatherSlice,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
