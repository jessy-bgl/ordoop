enum DocumentType {
  prescription = "prescription",
  invoice = "invoice",
}

interface DocumentModel {
  name: string;
  type: DocumentType;
  content: string;
}

export { DocumentModel, DocumentType };
