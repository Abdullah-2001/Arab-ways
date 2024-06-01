import React, { createContext, useEffect, useReducer } from "react";
import { lngReducer } from "./reducer";
import { eng } from "../../languages/en";
import { ar } from "../../languages/ar";

const initialState = {
  language: (localStorage.getItem("language") === "ar" ? ar : eng) || eng,
  name: "ar",
};

export const LangContext = createContext(initialState);

export const LanguageProvider = (props) => {

  const [lang, dispatch] = useReducer(lngReducer, initialState);

  function langToggle(langs) {
    let payload, name;
    if (langs === "en") {
      payload = eng;
      name = "en";
    }
    else if (langs === "ar") {
      payload = ar;
      name = "ar";
    }
    else {
      payload = eng;
      name = "ar";
    }
    dispatch({
      type: "TOGGLE",
      payload: { language: payload, name: name },
    });
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        langToggle,
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};