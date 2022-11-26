import { useQuery } from "react-query";
import { Heading } from "../models/heading";

const HEADINGS_QUERY_KEY = "headings_query_key";

const useFetchHeadings = () => {
  return useQuery<Heading[], Error>(HEADINGS_QUERY_KEY, () =>
    window.electron.api.getHeadings()
  );
};

export { useFetchHeadings };
