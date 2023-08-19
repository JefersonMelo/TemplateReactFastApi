import React from "react";
import Paper from "@mui/material/Paper";
import ImputBase from "@mui/material/ImputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/material/SearchIcon";

export default function DrawerSearchBar({ onChange, placeholder }) {
  return (
    <Paper sx={{ m: 2, display: "flex", alignItems: "center", width: "100%" }}>
      <ImputBase
        sx={{ m: 2, flex: 1 }}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Paper>
  );
}
