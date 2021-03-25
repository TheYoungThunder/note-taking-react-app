import { combineReducers } from "redux";
import notesReducer from "./notesReducer";

const allReducers = combineReducers({
  notesReducer,
});

export default allReducers;
