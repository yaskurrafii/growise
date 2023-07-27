import axios from "axios";
import * as url from "./url";

/**
 * Setting up axios base URL
 */
axios.defaults.baseURL = url.baseURL;

/**
 * Register API
 * @param data Parsing data user request body to API
 * @returns Response Object
 */
export async function RegisterApi(data) {
  if (data.password !== data.repeatpassword) {
    console.log("Password not same");
  } else {
    return await axios
      .post("http://127.0.0.1:8000/login/", data)
      .then((response) => {
        console.log("Register berhasil ", response.data);
      })
      .catch((error) => {
        console.log("Error register ", error.response.data);
      });
  }
}

/**
 * Login API
 * @param data Parsing user credentials request body to API
 * @returns Response Object
 */
export async function LoginApi(data) {
  return await axios
    .post(url.loginUrl, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}
