import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavBar from "../NavBar/NavBar";
import MainPage from "../../Pages/MainPage";
import { useAppContext } from "../../Contexts/AppContext";
import { dictRoutesIconsLeftDrawer } from "../Icons/ItemsLeftDrawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function LeftDrawer() {
  const theme = useTheme();
  const [appContext, setAppContext] = useAppContext();

  const handleDrawerClose = () => {
    setAppContext((appContext) => ({
      ...appContext,
      drawerOpened: false,
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar open={appContext.drawerOpened} />
      <Drawer
        sx={{
          width: appContext.drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: appContext.drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={appContext.drawerOpened}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <>
            {Object.keys(dictRoutesIconsLeftDrawer).map((key, index) => (
              <ListItem key={`${key}.${index}`} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {dictRoutesIconsLeftDrawer[key]}
                  </ListItemIcon>
                  <ListItemText primary={key} />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        </List>
        <Divider />
      </Drawer>
      <MainPage open={appContext.drawerOpened} />
    </Box>
  );
}
