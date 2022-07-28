function definesApiUrl() {
  if (window.location.origin.indexOf("localhost") === -1) {
    return window.location.origin;
  }
  return "http://localhost:8999";
}

export const appVersion = "1.0.0";
export const appName = "Template";
export const webURL = window.location.origin;
export const apiURL = `${definesApiUrl()}/api`;

export const apiRouts = {
  CREATE_USER: "/user/create/user/",
  GET_ALL_USERS: "/user/all/users/",
  GET_USER_BY_ID: "/user/id/%user_id%",
  GET_USER_BY_EMAIL: "/user/email/%user_email%",
  GET_ALL_ITEMS_BY_USER_ID: "/user/%user_id%/items/",
  GET_ALL_ITEMS: "/item/items/",
};
