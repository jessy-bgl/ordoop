import React from "react";
import { Grid } from "@mui/material";

import { useModels } from "./useModels";
import { ModelSelector } from "./components/ModelSelector";
import { ModelForm } from "./components/ModelForm";

const Models = () => {
  const {
    models,
    selectedModel,
    handleSelectModelName,
    handleSaveModel,
    handleDeleteModel,
    isLoading,
  } = useModels();

  if (isLoading) return <div />;

  const modelNames = models.map((model) => model.name);

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <ModelSelector
          modelNames={modelNames}
          selectedModelName={selectedModel.name}
          handleSelectModelName={handleSelectModelName}
        />
      </Grid>

      <Grid item>
        <ModelForm
          data={selectedModel}
          onSubmitCreate={handleSaveModel}
          onSubmitDelete={handleDeleteModel}
        />
      </Grid>
    </Grid>
  );
};

export { Models };
