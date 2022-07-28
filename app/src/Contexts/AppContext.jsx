import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const defaultValues = {
  drawerOpened: false,
  drawerWidth: 240,
  password: null,
  userName: null,
  email: null,
  refresh: false,
  warningsAndErrors: true,
  warning: {
    opened: false,
    type: "error",
    msg: "unknown",
  },
};

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(defaultValues);

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
