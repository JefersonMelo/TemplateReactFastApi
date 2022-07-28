import React, { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useAppContext } from "../../Contexts/AppContext";
import MuiAlert from "@mui/material/Alert";

export const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function WarningSnackBar() {
  const [appContext, setAppContext] = useAppContext();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAppContext({
      ...appContext,
      warning: {
        opened: false,
        type: appContext.warning.type,
        msg: "",
      },
    });
  };

  return (
    <React.Fragment>
      <Snackbar
        open={appContext.warning.opened}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={`${appContext.warning.type}`}
          sx={{ width: "100%" }}
        >
          {appContext.warning.msg}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
