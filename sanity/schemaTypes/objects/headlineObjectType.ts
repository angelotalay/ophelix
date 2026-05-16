import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { OBJECTS } from "@/sanity/schemaTypes/constants";
import intentField from "@/sanity/schemaTypes/fields/intentField";
import eyebrowField from "@/sanity/schemaTypes/fields/eyebrowField";

const headlineObjectType = defineType({
  name: OBJECTS.headline,
  title: "Headline Text Section",
  description: "Headline title and text",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "text",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      validation: rule => rule.required(),
    }),
    defineField({
      ...eyebrowField
    }),
    defineField({...intentField, validation: rule => rule.required()}),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default headlineObjectType;
