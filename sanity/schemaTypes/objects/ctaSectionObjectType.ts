import { defineType, defineField } from "sanity";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";
import { BlockElementIcon } from "@sanity/icons";

const OBJECTS = DOCUMENT_OBJECTS.OBJECTS;

const ctaSectionObjectType = defineType({
  name: OBJECTS.cta,
  title: "CTA Section",
  description:
    "Standard CTA section that can either have a background colour or image.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "reference",
      to: [{ type: "cta" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contentAlignment",
      title: "Content Alignment",
      type: "alignment",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "imageAsset",
    }),
    defineField({
      name: "theme",
      title: "Background Theme",
      description:
        "If no background image is present, select a background colour theme.",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "background", value: "background" },
          { title: "dark", value: "dark" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "content.title",
    },
  },
});

export default ctaSectionObjectType;
