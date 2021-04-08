import { LOGIN, LOGOUT, REGISTER } from "../actions/actionConstants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
}
