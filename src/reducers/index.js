import { combineReducers } from "redux";
import AuthReducer from "../reducers/authReducer";
import AlertReducer from "../reducers/alertReducer";
import EmployeeReducer from "../reducers/employeeReducer";

export default combineReducers({
  AuthReducer,
  AlertReducer,
  EmployeeReducer,
});
