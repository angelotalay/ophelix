import { defineType, defineField } from "sanity";
import intentField from "@/sanity/schemaTypes/fields/intentField";
import { OBJECTS } from "@/sanity/schemaTypes/constants";
import { BlockElementIcon } from "@sanity/icons";

const splitCtaSectionObjectType = defineType({
  name: OBJECTS.splitCta,
  title: "Split CTA Section",
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
      name: "ctaImage",
      title: "CTA Image",
      type: "imageAsset",
      description: "Image for the CTA Section.",
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
      title: "Background colour",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "content.title",
      media: "ctaImage.image",
    },
  },
});

export default splitCtaSectionObjectType;
