/* eslint-disable no-undef */

/**
 * Base URL
 * @returns Base URL string
 */
export const baseURL = `http://127.0.0.1:8000`;
// export const baseURL = import.meta.env.VITE_REACT_APP_ENV === "production"
//   ? "https://crawlerhub.lndata.com"
//   : process.env.REACT_APP_ENV === "staging"
//   ? `https://crawlerhub-staging.lndata.com`
//   : `http://localhost:8000`;

/**
 * Email Register URL
 * @returns Email Register URL string
 */
export const registerUrl = `/register/`;

/**
 * Login URL
 * @returns Login URL string
 */
export const loginUrl = `/login/`;
