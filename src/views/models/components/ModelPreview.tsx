import React from "react";
import { PDFViewer, Page, Document } from "@react-pdf/renderer";
import Html from "react-pdf-html";

type Props = { htmlContent: string };

const quillStylesheet = {
  p: { margin: 0 },
  b: { fontFamily: "Courier-Bold" },
  strong: { fontFamily: "Courier-Bold" },
  [".ql-align-right"]: { textAlign: "right" },
  [".ql-align-center"]: { textAlign: "center" },
};

const ModelPreview = ({ htmlContent }: Props) => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={{ padding: 10 }}>
        <Html stylesheet={quillStylesheet}>{htmlContent}</Html>
      </Page>
    </Document>
  );

  return (
    <PDFViewer showToolbar={false} width={400} height={541}>
      <MyDocument />
    </PDFViewer>
  );
};

export { ModelPreview };
