import { GET_EMPLOYEE_DETAILS } from "../actions/actionConstants";

const initialState = [];

const EmployeeReducer = (state = initialState, payload) => {
  const { type, employeeDetails } = payload;
  console.log("employeeDetails", employeeDetails);
  switch (type) {
    case GET_EMPLOYEE_DETAILS:
      state = [];
      return [...state, ...employeeDetails];
    default:
      return state;
  }
};

export default EmployeeReducer;
