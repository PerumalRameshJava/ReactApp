import { v4 as uuidv4 } from "uuid";
import { ADD_ALERT, REMOVE_ALERT } from "../actions/actionConstants";

export const addAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: ADD_ALERT,
    payload: {
      id,
      msg,
      alertType,
    },
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};
