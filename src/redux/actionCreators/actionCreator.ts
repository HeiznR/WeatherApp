import axios from "axios";
import { Dispatch } from "react";
import { IForecast } from "../../types/typeResponse";
import { testActionsTypes, userAction } from "../actions/actions";

const fetchUsers = (url: string) => {
  return async (dispatch: Dispatch<userAction>) => {
    try {
      dispatch({ type: testActionsTypes.fetchData });
      const response = await axios.get<IForecast>(url);
      dispatch({
        type: testActionsTypes.fetchDataSucces,
        payload: response.data,
      });
    } catch (er) {
      let e = (er as any).response;
      dispatch({
        type: testActionsTypes.fetchDataError,
        payload: {
          message: e.data.message,
          errorOccured: true,
        },
      });
    }
  };
};

export default fetchUsers;
