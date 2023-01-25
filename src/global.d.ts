import { api } from "./api";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    electron: {
      api: typeof api;
    };
  }
}
