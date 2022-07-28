import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../Contexts/AppContext";

export default function MainPage({ open }) {
  const [appContext, setAppContext] = useAppContext();

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${appContext.drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  return (
    <Box sx={{ mt: 7, flexGrow: 1 }}>
      <Main open={open}>
        <Typography paragraph>Lorem...</Typography>
        <Typography paragraph>Consequat...</Typography>
      </Main>
    </Box>
  );
}
