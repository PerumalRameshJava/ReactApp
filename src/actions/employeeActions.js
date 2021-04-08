import { GET_EMPLOYEE_DETAILS } from "../actions/actionConstants";
import api from "../utils/api";
import { addAlert } from "../actions/alertAction";

export const getEmployeeDetails = (id) => async (dispatch) => {
  let res;
  console.log("inside 2");
  console.log("id", id);
  let resArray = [];
  try {
    if (id) {
      console.log("inside 3");
      res = await api.get("/employees/employee/", {
        params: { emp_id: id },
      });
    } else {
      console.log("inside 4");
      res = await api.get("/employees/employee/", {
        params: { emp_id: null },
      });
    }
    console.log("res", res);
    resArray.push(...res.data);
    console.log("resArray ", resArray);
    if (resArray) {
      dispatch({
        type: GET_EMPLOYEE_DETAILS,
        employeeDetails: resArray,
      });
    }
  } catch (error) {
    console.log(error.response);
    error.response.data.map((errors) => {
      console.log("errors", errors);
      dispatch(addAlert(errors.error, "danger"));
    });
  }
};
