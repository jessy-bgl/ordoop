import { QueryClient } from "react-query";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: { refetchOnWindowFocus: false },
});

export { queryClient };
