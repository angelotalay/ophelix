import { defineType, defineField, defineArrayMember } from "sanity";
import {
  COMMON_OBJECTS,
  DOCUMENTS,
  OBJECTS,
} from "@/sanity/schemaTypes/constants";

const faq = defineType({
  name: DOCUMENTS.faq,
  title: "Frequently Asked Questions",
  type: "document",
  fields: [
    defineField({
      name: "faqSet",
      title: "FAQ Set",
      description: "The FAQ set to display",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "FAQ Text",
      description: "Optional description text for this FAQ set.",
      type: "text",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "faqItem",
          title: "FAQ Item Pair",
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: COMMON_OBJECTS.richText,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "question",
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "faqSet",
      faqItems: "faqItems",
      text: "text",
    },
    prepare({ title, faqItems, text }) {
      return {
        title,
        text,
        subtitle: `${faqItems?.length ?? 0} FAQ items`,
      };
    },
  },
});

export default faq;
