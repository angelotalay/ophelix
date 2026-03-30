import { defineType, defineField } from "sanity";
import intentField from "@/sanity/schemaTypes/objects/common/intentField";
import { OBJECTS } from "@/sanity/schemaTypes/constants";
import { BlockElementIcon } from "@sanity/icons";

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

    defineField({
      ...intentField,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "content.title",
      media: "content.ctaImage.image",
    },
  },
});

export default splitSectionObjectType;
