import { Theme } from "./Theme";

const colors = Theme.defaultThemeOptions.palette;

export const styleDropzone = {
  baseStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 23,
    borderWidth: 3,
    borderRadius: 23,
    margin: "7%",
    marginBotton: 0,
    borderColor: colors.dropzone.grey,
    borderStyle: "dashed",
    backgroundColor: colors.dropzone.grey98,
    color: colors.dropzone.lighGrey,
    outline: "none",
    width: "80%",
    position: "relative",
  },

  activeStyle: {
    borderColor: colors.secondary.main,
  },

  acceptStyle: {
    borderColor: colors.primary.light,
  },

  rejectStyle: {
    borderColor: colors.error.main,
  },
};
