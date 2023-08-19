import React from "react";
import { Grid, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectOptions(props) {
  const { control, label, options, defautValue, name, required, disabled } = props;

  return (
    <Grid>
      <Grid>
        <label>{label}</label>
      </Grid>
      <Controller
        render={({ fields }) => (
          <Select
            {...fields}
            sx={{ width: "100%", m: 1 }}
            variant="standard"
            required={required ?? false}
            disabled={disabled ?? false}
          >
            {options.map((option, index) => {
              <MenuItem
                key={`${option.value}-${index}`}
                name={`name-${option.value}`}
                value={option.value}
                sx={{ maxWidth: "100%" }}
              >
                {option.label}
              </MenuItem>;
            })}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defautValue}
      />
    </Grid>
  );
}
