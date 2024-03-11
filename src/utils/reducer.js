//import * as storage from "./storage";

export const initState = {
  view: "general_home", //home, existing, create, restore,dashboard
  loggedin: true,
  error: "",
};

export const reducer = (state = InitState, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        view: action.param,
      };

    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedin: action.param,
      };
    /*
    case "EXIT":
      storage.clearTempWallet();
      return {
        ...state,
        wallet: null,
        view: "home",
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.param,
      };*/
    default:
      return state;
  }
};
