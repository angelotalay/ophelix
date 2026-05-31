import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

import {
  DOCUMENTS,
  OBJECTS,
  COMMON_OBJECTS,
} from "@/sanity/schemaTypes/constants";

const faqSectionObjectType = defineType({
  name: OBJECTS.faqSection,
  title: "FAQ Section",
  description: "A page section that displays a reusable FAQ set.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The title displayed above the FAQ items.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      description: "Optional supporting text displayed below the title.",
      type: "text",
    }),
    defineField({
      name: "faqSet",
      title: "FAQ Set",
      description: "Choose the reusable FAQ set to display.",
      type: "reference",
      to: [{ type: DOCUMENTS.faq }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaNavigation",
      title: "Navigation Link",
      type: COMMON_OBJECTS.navigationLink,
    }),

  ],
  preview: {
    select: {
      title: "title",
      faqSetTitle: "faqSet.title",
    },
    prepare({ title, faqSetTitle }) {
      return {
        title: title || "FAQ Section",
        subtitle: faqSetTitle
          ? `FAQ set: ${faqSetTitle}`
          : "No FAQ set selected",
      };
    },
  },
});

export default faqSectionObjectType;
