import { IError } from "../../types/typeError";
import { IForecast } from "../../types/typeResponse";
import { testActionsTypes, userAction } from "../actions/actions";

interface IInitial {
  data: IForecast;
  error: IError;
}

const InitialState: IInitial = {
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
};

export const fetchDataReducer = (
  state = InitialState,
  action: userAction
): IInitial => {
  switch (action.type) {
    case testActionsTypes.fetchData:
      return { ...state };
    case testActionsTypes.fetchDataSucces:
      return { ...state, data: action.payload };
    case testActionsTypes.fetchDataError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
