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
  return await axios
    .post(url.registerUrl, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
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
