import { combineReducers } from "redux";
import authReducer from "./authReducer ";
import loaderReducer from "./loaderReducer";
import patientReducer from "./patientReducer";
import doctorReducer from "./doctorReducer";

export default combineReducers({
  authReducer,
  loaderReducer,
  patientReducer,
  doctorReducer
})