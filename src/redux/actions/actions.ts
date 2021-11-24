import { IError } from "../../types/typeError";
import { IForecast } from "../../types/typeResponse";

export enum testActionsTypes {
  fetchData = "fetchData",
  fetchDataSucces = "fetchDataSucces",
  fetchDataError = "fetchDataError",
}

interface IFetchData {
  type: testActionsTypes.fetchData;
}
interface IFetchDataSucces {
  type: testActionsTypes.fetchDataSucces;
  payload: IForecast;
}
interface IFetchDataError {
  type: testActionsTypes.fetchDataError;
  payload: IError;
}

export type userAction = IFetchData | IFetchDataSucces | IFetchDataError;
