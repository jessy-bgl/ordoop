import Store from "electron-store";

import { Heading } from "../../models/heading";
import { Prescription } from "../../models/prescription";

type AppData = {
  headings: Heading[];
  prescriptions: Prescription[];
};

const store = new Store<AppData>({
  defaults: {
    headings: [],
    prescriptions: [],
  },
});

export { store };
export type { AppData };
