import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";

type Props = {
  modelName: string;
  handleClose: () => void;
  handleSubmit: () => void;
};

const DeleteModelDialog = ({ handleClose, handleSubmit, modelName }: Props) => {
  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle>Confirmer la suppression</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Êtes-vous sûr de vouloir supprimer le modèle "{modelName}" ?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button variant="contained" onClick={handleSubmit} autoFocus>
          Valider
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { DeleteModelDialog };
