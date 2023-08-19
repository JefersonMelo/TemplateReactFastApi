import React from "react";
import { Autocomplete, Grid, MenuItem, Select, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectAutoComplete({control, label, options, name}) {
  return (
    <Grid>
      <Grid>
        <label>{label}</label>
      </Grid>
      <Controller
        render={({ fields }) => (
          <Autocomplete
            {...fields}
            sx={{ width: "100%", m: 1 }}
            disablePortal
            getOptionsLabel={(opt) => opt}
            renderInput={(params) => (
              <TextField {...params} variant={"standard"} label="Movie" />
            )}
            onChange={(data) => fields.onChange(data)}
          />
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
}
