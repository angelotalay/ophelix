import { defineField, defineType } from "sanity";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";

const COMMON_OBJECTS = DOCUMENT_OBJECTS.COMMON_OBJECTS;

const addressObjectType = defineType({
  name: COMMON_OBJECTS.address,
  title: "Address",
  type: "object",
  fields: [
    defineField({
      name: "streetName",
      title: "Street Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "streetNumber",
      title: "Street Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "postCode",
      title: "Post Code",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default addressObjectType;
