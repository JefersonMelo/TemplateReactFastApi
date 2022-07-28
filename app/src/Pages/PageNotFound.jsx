import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageNotFound() {
  return (
    <Box
      sx={{
        mt: 17,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" component="div">
        Error 404
      </Typography>
      <Typography variant="h6" component="div">
        Page Not Found
      </Typography>
    </Box>
  );
}
