import Store from "electron-store";

import { DocumentModel } from "../../models/document_model";
import { Prescription } from "../../models/prescription";
import { SavedDocument } from "../../models/saved_document";

enum AppData {
  models = "models",
  prescriptions = "prescriptions",
  history = "history",
}

type Models = { [name: string]: DocumentModel };
const modelStore = new Store<Models>({
  name: AppData.models,
  defaults: {},
});

type Prescriptions = { [label: string]: Prescription };
const prescriptionStore = new Store<Prescriptions>({
  name: AppData.prescriptions,
  defaults: {},
});

type History = { [fileName: string]: SavedDocument };
const historyStore = new Store<History>({
  name: AppData.history,
  defaults: {},
});

export { AppData, modelStore, prescriptionStore, historyStore };
