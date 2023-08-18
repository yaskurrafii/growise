import axios from "axios";
import * as url from "./url";
import { redirect } from "react-router-dom";

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
      .post(url.registerUrl, data)
      .then((response) => {
        return response;
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

export async function CreateCrawler(data) {
  return await axios
    .post(url.scraperurl, (data = data))
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

export async function GetCrawler(userid) {
  return await axios
    .get(`http://127.0.0.1:8000/scraper/${userid}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}
