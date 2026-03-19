import { defineType, defineField } from "sanity";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";

const COMMON_OBJECTS = DOCUMENT_OBJECTS.COMMON_OBJECTS;

const socialMediaObjectType = defineType({
  name: COMMON_OBJECTS.socialMedia,
  title: "Social Media",
  description: "Social Media Link",
  type: "object",
  fields: [
    defineField({
      name: "socialMediaTitle",
      title: "Social Media",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socialMediaLink",
      title: "Social Media Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default socialMediaObjectType;
