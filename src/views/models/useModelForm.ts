import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DocumentModel, DocumentType } from "../../models/document_model";

interface IFormInputs {
  name: string;
  type: DocumentType;
  content: string;
}

const schema = yup
  .object({
    name: yup.string().required("Champ obligatoire"),
    type: yup
      .string()
      .oneOf(Object.values(DocumentType))
      .required("Champ obligatoire"),
  })
  .required();

const useModelForm = (data: DocumentModel) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(data);
  }, [data]);

  return { handleSubmit, register, errors, watch, setValue };
};

export { useModelForm };
