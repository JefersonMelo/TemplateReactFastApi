import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [appState, setAppState] = useState({
        drawerOpened: false,
        drawerWidth: 240,
        accessToken: null,
        userName: null,
        refresh: false,
        warning: {
            opened: false,
            type: 'error',
            message: 'Desconhecido'
        },
    });

    return(
        <AppContext.AppProvider value={[appState, setAppState]}>
            {props.children}
        </AppContext.AppProvider>
    );
}

export const useAppContext = () => useContext(AppContext);