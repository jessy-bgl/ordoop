// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { Heading } from "./models/heading";

export const api = {
  getHeadings: (): Promise<Heading[]> =>
    ipcRenderer.invoke("getStoreValue", "headings"),
  setHeadings: (value: Heading[]): Promise<void> =>
    ipcRenderer.invoke("setStoreValue", "headings", value),
};

contextBridge.exposeInMainWorld("electron", { api });
