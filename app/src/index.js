import React from 'react';
import App from './App';
import { Theme } from './Helpers/Theme';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { AppProvider } from './AppContext';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={Theme}>
                <App />
            </MuiThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
