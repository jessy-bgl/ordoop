import { ipcMain } from "electron";

import {
  AppData,
  modelStore,
  prescriptionStore,
  historyStore,
} from "./services/storage/db";
import { ApiActions } from "./api";
import { DocumentModel } from "./models/document_model";
import { Prescription } from "./models/prescription";
import { SavedDocument } from "./models/saved_document";

ipcMain.handle(ApiActions.get, async (_, dataType: AppData) => {
  if (dataType === AppData.models) return modelStore.store;
  if (dataType === AppData.prescriptions) return prescriptionStore.store;
  if (dataType === AppData.history) return historyStore.store;
});

ipcMain.handle(ApiActions.add, async (_, dataType: AppData, value) => {
  if (dataType === AppData.models) {
    const key = (value as DocumentModel).name;
    if (modelStore.has(key))
      throw new Error("Il existe déjà un modèle portant ce nom");
    return modelStore.set(key, value);
  }
  if (dataType === AppData.prescriptions) {
    const key = (value as Prescription).label;
    return prescriptionStore.set(key, value);
  }
  if (dataType === AppData.history) {
    const key = (value as SavedDocument).fileName;
    return historyStore.set(key, value);
  }
});

ipcMain.handle(
  ApiActions.update,
  async (_, dataType: AppData, oldKey: string, value) => {
    if (dataType === AppData.models) {
      const newValue = value as DocumentModel;
      const newKey = newValue.name;
      if (oldKey !== newKey) {
        if (modelStore.has(newKey))
          throw new Error("Il existe déjà un modèle portant ce nom");
        modelStore.delete(oldKey);
      }
      return modelStore.set(newKey, value);
    }
    if (dataType === AppData.prescriptions) {
      const newValue = value as Prescription;
      const newKey = newValue.label;
      if (oldKey !== newKey) prescriptionStore.delete(oldKey);
      return prescriptionStore.set(newKey, value);
    }
    if (dataType === AppData.history) {
      const newValue = value as SavedDocument;
      const newKey = newValue.fileName;
      if (oldKey !== newKey) historyStore.delete(oldKey);
      return historyStore.set(newKey, value);
    }
  }
);

ipcMain.handle(ApiActions.remove, async (_, dataType: AppData, value) => {
  if (dataType === AppData.models) return modelStore.delete(value);
  if (dataType === AppData.prescriptions)
    return prescriptionStore.delete(value);
  if (dataType === AppData.history) return historyStore.delete(value);
});
