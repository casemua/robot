import { combineReducers } from "redux";
import { forward, direction } from "./robotReducer";

const reducers = combineReducers({
  direction,
  forward
});

export default reducers;
