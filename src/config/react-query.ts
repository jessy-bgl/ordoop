/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
  },
  mutations: {
    onError: (error: any) => {
      toast(error.message, { type: "error" });
    },
  },
});

export { queryClient };
