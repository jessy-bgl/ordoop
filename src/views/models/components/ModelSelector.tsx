import React from "react";
import { Autocomplete, TextField } from "@mui/material";

type Props = {
  modelNames: string[];
  selectedModelName: string | undefined;
  handleSelectModelName: (modelName: string) => void;
};

const ModelSelector = ({
  modelNames,
  selectedModelName,
  handleSelectModelName,
}: Props) => {
  return (
    <Autocomplete
      disablePortal
      value={selectedModelName}
      onChange={(_, newValue) => handleSelectModelName(newValue || "")}
      options={modelNames}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} name="Modèle" />}
    />
  );
};

export { ModelSelector };
