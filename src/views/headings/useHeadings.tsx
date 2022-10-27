import { useState } from "react";
import Store from "../../services/store/store";

import { Heading } from "../../models/heading";

const useHeadings = () => {
  const headings: Heading[] = [];
  // const headings: Heading[] = store.get("headings", []);

  const [selectedHeading, setSelectedHeading] = useState<Heading | undefined>(
    headings[0]
  );

  const handleSelectHeadingLabel = (headingLabel: string) => {
    const heading = headings.find((heading) => heading.label === headingLabel);
    if (heading) setSelectedHeading(heading);
  };

  return { headings, selectedHeading, handleSelectHeadingLabel };
};

export { useHeadings };
