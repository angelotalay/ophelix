import { defineType, defineField } from "sanity";
import { OBJECTS } from "@/sanity/schemaTypes/constants";
import { BlockElementIcon } from "@sanity/icons";
import alignmentField, { ALIGNMENT_TYPES } from "@/sanity/schemaTypes/fields/alignmentField";
import intentField from "@/sanity/schemaTypes/fields/intentField";

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
      name: "ctaImage",
      title: "CTA Background Image",
      type: "imageAsset",
      description: "Optional background image for this CTA section.",
    }),

    defineField({
      ...alignmentField,
    }),
    defineField({
      name: "textAlignment",
      title: "Text Alignment",
      description: "Change how the text content is aligned within the container.",
      type: "string",
      options: {
        list: ALIGNMENT_TYPES,
        layout: "radio",
      },
      validation: (rule) => rule.required(),
      initialValue: "center",
    }),
    defineField({
      ...intentField,
      title: "Background Colour",
      description: "Only used when no CTA background image is selected.",
      hidden: ({ parent }) => Boolean(parent?.ctaImage),
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { ctaImage?: unknown };

          if (parent?.ctaImage) {
            return true;
          }

          if (!value) {
            return "Choose a background colour when no CTA image is selected.";
          }

          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "content.title",
      media: "ctaImage.image",
    },
  },
});

export default ctaSectionObjectType;
