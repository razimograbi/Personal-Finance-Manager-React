import { useState, useEffect, useContext } from "react";
//import { styles } from "../utils/styles";
import Context from "../utils/context";
import Error from "./error";
import Header from "./header";

export default function Layout({ children, title }) {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (state.error !== "") {
      const timer = setTimeout(() => {
        dispatch({ type: "SET_ERROR", param: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.error]);

  return (
    <div>
      {state.view !== "general_home" && state.view !== "login_form" ? (
        <Header />
      ) : (
        <Header />
      )}
      {children}
      <div class="relative h-8">
        <Error text={state.error} />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}
