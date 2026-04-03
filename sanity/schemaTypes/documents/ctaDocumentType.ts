import { defineType, defineField } from "sanity";
import { DOCUMENTS, COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const cta = defineType({
  name: DOCUMENTS.cta,
  title: "CTA",
  type: "document",
  fieldsets: [
    {
      name: "navigationButtons",
      title: "Navigation Buttons (Optional)",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The CTA title",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      description: "Short tag describing the essence of the CTA",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "CTA Text",
      description: "The CTA description text",
      type: "text",
    }),
    defineField({
      name: "ctaImage",
      title: "CTA Image",
      description: "The CTA Image",
      type: COMMON_OBJECTS.imageAsset,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaNavigation1",
      title: "CTA Navigation Link 1",
      type: COMMON_OBJECTS.navigationLink,
      fieldset: "navigationButtons",
    }),
    defineField({
      name: "ctaNavigation2",
      title: "CTA Navigation Link 2",
      type: COMMON_OBJECTS.navigationLink,
      fieldset: "navigationButtons",
    }),
    defineField({
      name: "supportingNote",
      title: "Supporting Note",
      description: "A supporting statement that lies at the end of the CTA",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "ctaImage.image",
    },
  },
});

export default cta;
