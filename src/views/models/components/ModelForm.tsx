import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextField, Grid, Button, Dialog, MenuItem } from "@mui/material";

import { quillModules } from "../../../config/react-quill";
import { DocumentModel, DocumentType } from "../../../models/document_model";
import { useModelForm } from "../useModelForm";
import { ModelPreview } from "./ModelPreview";
import { defaultNewModel } from "../useModels";
import { DeleteModelDialog } from "./ModelDeleteDialog";
import "./quill-editor.css";

type Props = {
  data: DocumentModel;
  onSubmitCreate: (data: DocumentModel) => void;
  onSubmitDelete: (name: string) => void;
};

const ModelForm = ({ data, onSubmitCreate, onSubmitDelete }: Props) => {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [showRemoveDialog, setShowRemoveDialog] = useState<boolean>(false);

  const { handleSubmit, register, errors, setValue, watch } =
    useModelForm(data);

  const type = watch("type");
  const content = watch("content");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitCreate)}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <TextField
              {...register("name")}
              label="Nom du modèle"
              error={errors["name"] ? true : false}
              sx={{ width: 300 }}
            />
          </Grid>

          <Grid item>
            <TextField
              {...register("type")}
              select
              label="Type de modèle"
              value={type}
              error={errors["type"] ? true : false}
              sx={{ width: 300 }}
            >
              <MenuItem value={DocumentType.prescription}>Ordonnance</MenuItem>
              <MenuItem value={DocumentType.invoice}>Facture</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={(newContent) => setValue("content", newContent)}
              modules={quillModules}
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" onClick={() => setShowPreview(true)}>
              Voir l'aperçu
            </Button>
          </Grid>

          <Grid item>
            <Grid container spacing={2}>
              {data.name !== defaultNewModel.name && (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => setShowRemoveDialog(true)}
                  >
                    Supprimer
                  </Button>
                </Grid>
              )}
              <Grid item>
                <Button type="submit" variant="contained">
                  Sauvegarder
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {showPreview && (
          <Dialog open onClose={() => setShowPreview(false)}>
            <ModelPreview htmlContent={content} />
          </Dialog>
        )}
      </form>

      {showRemoveDialog && (
        <DeleteModelDialog
          handleSubmit={() => onSubmitDelete(data.name)}
          handleClose={() => setShowRemoveDialog(false)}
          modelName={data.name}
        />
      )}
    </>
  );
};

export { ModelForm };
