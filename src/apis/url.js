/* eslint-disable no-undef */

/**
 * Base URL
 * @returns Base URL string
 */
export const baseURL = `http://localhost:8000`;
// process.env.REACT_APP_ENV === "production"
//   ? "https://crawlerhub.lndata.com"
//   : process.env.REACT_APP_ENV === "staging"
//   ? `https://crawlerhub-staging.lndata.com`
//   : `http://localhost:8000`;

/**
 * Email Register URL
 * @returns Email Register URL string
 */
export const registerUrl = `/register`;

/**
 * Login URL
 * @returns Login URL string
 */
export const loginUrl = `/api-auth`;
