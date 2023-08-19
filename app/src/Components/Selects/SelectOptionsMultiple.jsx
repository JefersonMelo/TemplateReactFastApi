import React from "react";
import { Grid, MenuItem, Select, Chip, Box } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectOptionsMultiple(props) {
  const { control, label, options, name, required } = props;

  return (
    <Grid>
      <Grid>
        <label>{label}</label>
      </Grid>
      <Controller
        render={({ value, fields }) => (
          <Select
            {...fields}
            sx={{ width: "100%", m: 1 }}
            variant="standard"
            required={required ?? false}
            multiple
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {options.lenght > 0 &&
                  selected.map((value) => (
                    <Chip
                      key={value}
                      label={
                        options[options.findIndex((e) => e.value === value)]
                          .label
                      }
                    />
                  ))}
              </Box>
            )}
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
      />
    </Grid>
  );
}
