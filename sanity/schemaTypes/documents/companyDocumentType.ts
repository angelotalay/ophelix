import { defineField, defineType } from "sanity";
import { DOCUMENTS, COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const companyDocumentType = defineType({
  name: DOCUMENTS.company,
  title: "Company",
  type: "document",
  description: "Informational details about the company",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the company",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "yearEstablished",
      title: "Year Established",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: COMMON_OBJECTS.address,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Social Media",
      type: "array",
      of: [{ type: COMMON_OBJECTS.socialMedia }],
    }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        defineField({
          name: "logoImage",
          type: "image",
          title: "Logo Image",
        }),
      ],
    }),
  ],
});

export default companyDocumentType;
