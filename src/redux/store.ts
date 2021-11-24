import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchDataReducer } from "./reducers/reducers";

const rootReducer = combineReducers({
  fetch: fetchDataReducer,
});
export type rootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
