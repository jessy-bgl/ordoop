import { DocumentModel } from "./models/document_model";
import { AppData } from "./services/storage/db";
import ipcRendererService from "./ipcRendererService";

enum ApiActions {
  get = "getStoreValue",
  add = "addStoreValue",
  update = "updateStoreValue",
  remove = "removeStoreValue",
}

const modelsApi = {
  getModels: (): Promise<DocumentModel[]> =>
    ipcRendererService
      .invoke(ApiActions.get, AppData.models)
      .then((value) => Object.values(value)),
  addModel: (value: DocumentModel): Promise<void> =>
    ipcRendererService.invoke(ApiActions.add, AppData.models, value),
  updateModel: (oldName: string, value: DocumentModel): Promise<void> =>
    ipcRendererService.invoke(
      ApiActions.update,
      AppData.models,
      oldName,
      value
    ),
  removeModel: (name: string): Promise<void> =>
    ipcRendererService.invoke(ApiActions.remove, AppData.models, name),
};

const api = { ...modelsApi };

export { api, ApiActions };
