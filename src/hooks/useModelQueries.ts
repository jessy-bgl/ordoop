import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { DocumentModel } from "../models/document_model";
import { queryClient } from "../config/react-query";

const MODELS_QUERY_KEY = "models_query_key";

const useFetchModels = () => {
  return useQuery<DocumentModel[], Error>({
    queryKey: [MODELS_QUERY_KEY],
    queryFn: () => window.electron.api.getModels(),
  });
};

const useAddModel = () => {
  return useMutation({
    mutationFn: (model: DocumentModel) => window.electron.api.addModel(model),
    onSuccess: () => {
      toast("Modèle ajouté avec succès", { type: "success" });
      queryClient.invalidateQueries({ queryKey: [MODELS_QUERY_KEY] });
    },
  });
};

type UpdateModelArgs = {
  oldName: string;
  newValues: DocumentModel;
};
const useUpdateModel = () => {
  return useMutation({
    mutationFn: ({ oldName, newValues }: UpdateModelArgs) =>
      window.electron.api.updateModel(oldName, newValues),
    onSuccess: () => {
      toast("Modèle modifié avec succès", { type: "success" });
      queryClient.invalidateQueries({ queryKey: [MODELS_QUERY_KEY] });
    },
  });
};

const useRemoveModel = () => {
  return useMutation({
    mutationFn: (name: string) => window.electron.api.removeModel(name),
    onSuccess: () => {
      toast("Modèle supprimé avec succès", { type: "success" });
      queryClient.invalidateQueries({ queryKey: [MODELS_QUERY_KEY] });
    },
  });
};

export { useFetchModels, useAddModel, useUpdateModel, useRemoveModel };
