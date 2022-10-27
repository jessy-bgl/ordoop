import { ipcRenderer } from "electron";

import { Heading } from "../../models/heading";
import { Prescription } from "../../models/prescription";

class Store {
  static getHeadings = (): Promise<Heading[]> =>
    ipcRenderer.invoke("getStoreValue", "headings");
}

export default Store;
