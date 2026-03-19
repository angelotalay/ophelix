import { defineType, defineField } from "sanity";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";
import { BlockElementIcon } from "@sanity/icons";

const OBJECTS = DOCUMENT_OBJECTS.OBJECTS;

const splitSectionObjectType = defineType({
  name: OBJECTS.splitCta,
  title: "Split Section",
  description: "A CTA section split into two columns",
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
      name: "layout",
      type: "string",
      title: "Layout",
      options: {
        list: [
          { title: "Image Left", value: "image-left" },
          { title: "Image Right", value: "image-right" },
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

export default splitSectionObjectType;
