import React from "react";
import { Grid, Typography } from "@mui/material";

import { useHeadings } from "./useHeadings";
import { HeadingSelector } from "./components/HeadingSelector";
import { HeadingPreview } from "./components/HeadingPreview";
import { HeadingEditor } from "./components/HeadingEditor";

const Headings = () => {
  const { headings, selectedHeading, handleSelectHeadingLabel } = useHeadings();
  const headingLabels = headings.map((heading) => heading.label);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Grid container direction="column" alignItems={"center"} spacing={2}>
          <Grid item>
            <Typography variant="h5">Edition</Typography>
          </Grid>
          <Grid item>
            <HeadingSelector
              headingLabels={headingLabels}
              selectedHeadingLabel={selectedHeading?.label}
              handleSelectHeadingLabel={handleSelectHeadingLabel}
            />
          </Grid>
          <Grid item>
            <HeadingEditor heading={selectedHeading} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container direction="column" alignItems={"center"} spacing={2}>
          <Grid item>
            <Typography variant="h5">Aperçu</Typography>
          </Grid>
          <Grid item>
            <HeadingPreview heading={selectedHeading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Headings };
