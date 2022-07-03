import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Theme } from './Helpers/Theme';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { AppProvider } from './AppContext';
import ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={Theme}>
                <App />
            </MuiThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
