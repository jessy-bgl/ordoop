import React from "react";
import { Button, Grid, TextField } from "@mui/material";

import { Heading } from "../../../models/heading";

type Props = {
  heading: Heading;
};

const HeadingEditor = ({ heading }: Props) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <TextField
          label="Nom du modèle"
          defaultValue={heading.label}
          sx={{ width: 300 }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Nom du praticien"
          defaultValue={heading.name}
          sx={{ width: 300 }}
        />
      </Grid>
      <Grid item>
        <TextField
          multiline
          rows={7}
          label="Autres informations"
          defaultValue={heading.content}
          sx={{ width: 300 }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Lieu"
          defaultValue={heading.place}
          sx={{ width: 300 }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Sauvegarder
        </Button>
      </Grid>
    </Grid>
  );
};

export { HeadingEditor };
