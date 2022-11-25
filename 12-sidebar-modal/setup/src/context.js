import React, { useState, useContext } from "react";
import App from "./App";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

// CUSTOM HOOK
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
