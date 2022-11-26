import { useEffect, useState } from "react";

import { useFetchHeadings } from "../../hooks/useHeadingQueries";
import { Heading } from "../../models/heading";

const defaultHeading: Heading = {
  label: "Nouveau modèle",
  content: "",
  place: "",
  name: "",
};

const useHeadings = () => {
  const { data, isLoading } = useFetchHeadings();

  const [headings, setHeadings] = useState<Heading[]>([defaultHeading]);

  const [selectedHeading, setSelectedHeading] = useState<Heading>(headings[0]);

  useEffect(() => {
    if (data?.length) {
      setHeadings([...data, defaultHeading]);
      setSelectedHeading(headings[0]);
    }
  }, [data]);

  const handleSelectHeadingLabel = (headingLabel: string) => {
    const newSelectedHeading = headings.find(
      (heading) => heading.label === headingLabel
    );
    if (newSelectedHeading) setSelectedHeading(newSelectedHeading);
  };

  return {
    isLoading,
    headings,
    selectedHeading,
    handleSelectHeadingLabel,
  };
};

export { useHeadings };
