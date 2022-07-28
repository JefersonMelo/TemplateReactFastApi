import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const defaultThemeOptions = {
  palette: {
    common: {
      darkGreen: "#00473E",
    },
    primary: {
      main: "#00473E",
      light: "#00877A",
      dark: "#003B33",
    },
    secondary: {
      main: "#00877A",
      light: "#00BDA9",
      dark: "#003630",
    },
    error: {
      main: "#E50000",
      dark: "#930000",
      light: "#FF0000",
    },
    warning: {
      main: "#F58220",
      light: "#FC8821",
      dark: "#BB6518",
    },
    success: {
      main: "#0B9F00",
      light: "#0EC500",
      dark: "#00473E",
    },
    dropzone: {
      grey: "#EEEEEE",
      lighGrey: "#BDBDBD",
      grey98: "#FAFAFA",
    },
  },
};

let _theme = createTheme(defaultThemeOptions);
_theme = responsiveFontSizes(_theme);

export const Theme = _theme;
