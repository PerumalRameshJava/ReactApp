import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.data.msg === "Token is not valid") {
//       logout();
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
