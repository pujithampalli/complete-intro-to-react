// @flow
import { combineReducers } from "redux";
import { SET_SEARCH_TERM, ADD_API_DATA } from "./actions";

// flex standard action
// {
//     type: string,
//     payload: ,
//     error: Error,
//     metadata:
// }

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    // const key = action.payload.imdbID;
    // const obj = {};
    // obj[key] = action.payload;
    return Object.assign({}, state, {
      [action.payload.imdbID]: action.payload
    });
  }
  return state;
};

const searchTerm = (state = "", action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });
export default rootReducer;
