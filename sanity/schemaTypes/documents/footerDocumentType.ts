import { defineType, defineField } from "sanity";
import { EditIcon } from "@sanity/icons";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";

const DOCUMENTS = DOCUMENT_OBJECTS.DOCUMENTS;

const footerDocumentType = defineType({
  name: DOCUMENTS.footer,
  title: "Footer Content",
  description: "The content of the page footer",
  type: "document",
  icon: EditIcon,
  fields: [
    defineField({
      name: "companyDetails",
      title: "Company Details",
      type: "reference",
      to: {
        type: DOCUMENTS.company,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});

export default footerDocumentType;
