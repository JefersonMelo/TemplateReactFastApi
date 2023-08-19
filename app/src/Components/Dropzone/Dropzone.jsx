import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { BackupIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { styleDropzone } from "../../Helpers/CustomStyles";

export default function Dropzone({ accept, file, setFile }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length && acceptedFiles[0].size < 100 * Math.pow(10, 7)) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept });

  const style = useMemo(
    () => ({
      ...styleDropzone.baseStyle,
      ...(isDragActive ? styleDropzone.activeStyle : {}),
      ...(isDragAccept ? styleDropzone.acceptStyle : {}),
      ...(isDragReject ? styleDropzone.rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <Box {...getRootProps({ style })}>
      <BackupIcon />
      <Typography sx={{ mb: 2 }}>Drop The File Here (Max 100MB)</Typography>
      <input {...getInputProps()} />
      <Typography
        sx={{ m: 1, wordBreak: "break-all" }}
        className={"title ubuntu"}
        variant={"p"}
        fontFamily={"Ubuntu, serif"}
      >
        {file?.name}
      </Typography>
    </Box>
  );
}
