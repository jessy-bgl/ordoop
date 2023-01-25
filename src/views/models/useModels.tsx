import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  useAddModel,
  useFetchModels,
  useRemoveModel,
  useUpdateModel,
} from "../../hooks/useModelQueries";
import { DocumentModel, DocumentType } from "../../models/document_model";

const defaultNewModel: DocumentModel = {
  name: "Nouveau modèle",
  type: DocumentType.prescription,
  content: "",
};

const useModels = () => {
  const { data: fetchedModels, isFetching } = useFetchModels();
  const addModelQuery = useAddModel();
  const updateModelQuery = useUpdateModel();
  const removeModelQuery = useRemoveModel();

  const [models, setModels] = useState<DocumentModel[]>([defaultNewModel]);
  const [selectedModel, setSelectedModel] = useState<DocumentModel>(models[0]);

  useEffect(() => {
    if (fetchedModels?.length) {
      setModels([...fetchedModels, defaultNewModel]);
      setSelectedModel(fetchedModels[0]);
    }
  }, [fetchedModels]);

  const handleSelectModelName = (modelName: string) => {
    const newSelectedModel = models.find((model) => model.name === modelName);
    if (newSelectedModel) setSelectedModel(newSelectedModel);
  };

  const handleSaveModel = async (
    newModelValues: DocumentModel
  ): Promise<void> => {
    if (newModelValues.name === defaultNewModel.name) {
      toast("Veuillez modifier le nom du modèle", { type: "error" });
      return;
    }
    const isExistingModel =
      fetchedModels?.findIndex((model) => model.name === selectedModel.name) !==
      -1;
    if (isExistingModel)
      updateModelQuery.mutate({
        oldName: selectedModel.name,
        newValues: newModelValues,
      });
    else addModelQuery.mutate(newModelValues);
  };

  const handleDeleteModel = (name: string) => {
    removeModelQuery.mutate(name);
  };

  return {
    models,
    selectedModel,
    handleSelectModelName,
    handleSaveModel,
    handleDeleteModel,
    isLoading: isFetching,
  };
};

export { useModels, defaultNewModel };
