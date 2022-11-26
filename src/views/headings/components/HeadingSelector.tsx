import React from "react";
import { Autocomplete, TextField } from "@mui/material";

type Props = {
  headingLabels: string[];
  selectedHeadingLabel: string | undefined;
  handleSelectHeadingLabel: (headingLabel: string) => void;
};

const HeadingSelector = ({
  headingLabels,
  selectedHeadingLabel,
  handleSelectHeadingLabel,
}: Props) => {
  return (
    <Autocomplete
      disablePortal
      value={selectedHeadingLabel}
      onChange={(event, newValue) => handleSelectHeadingLabel(newValue || "")}
      options={headingLabels}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Modèle" />}
    />
  );
};

export { HeadingSelector };
