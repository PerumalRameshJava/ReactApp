import { LOGIN, LOGOUT, REGISTER, ADD_ALERT } from "../actions/actionConstants";
import api from "../utils/api";
import { addAlert } from "../actions/alertAction";
import { compose } from "redux";

export const login = (email, password) => async (dispatch) => {
  try {
    const body = { email, password };
    const res = await api.post("/auth/login", body);
    console.log(res);
    dispatch({
      type: LOGIN,
      payload: res,
    });
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      dispatch(addAlert(error.response.data.msg, "danger"));
    } else {
      const errors = error.response.data.errors;
      Object.keys(errors).map((key, value) => {
        dispatch(addAlert(errors[key], "danger"));
      });
    }
  }
};

export const register = (formdata) => async (dispatch) => {
  const { name, email, password, passwordConfirm } = {
    ...formdata,
  };

  const body = { name, email, password, passwordConfirm };

  try {
    const res = await api.post("/auth/register", body);
    dispatch({
      type: REGISTER,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    const errors = error.response.data.errors;
    Object.keys(errors).map((key, value) => {
      dispatch(addAlert(errors[key], "danger"));
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
};
