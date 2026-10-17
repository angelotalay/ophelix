import { defineType, defineField, defineArrayMember } from "sanity";
import { COMMON_OBJECTS, DOCUMENTS } from "@/sanity/schemaTypes/constants";

const productSpecificationDocumentType = defineType({
  name: DOCUMENTS.productSpecification,
  title: "Product Specification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Specification Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Product specification description.",
      description: "Optional description text for this FAQ set.",
      type: "text",
    }),
    defineField({
      name: "specificationItems",
      title: "Specification Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "specificationItem",
          title: "Specification Block",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Specification Section Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "text",
              title: "Specification Section Text",
              type: "text",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Specification Section Image",
              type: COMMON_OBJECTS.imageAsset,
            }),
            defineField({
              name: "direction",
              title: "Direction",
              description:
                "The direction of the section from which the image is displayed",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      text: "text",
      specificationItems: "specificationItems",
    },
    prepare({ title, specificationItems, text }) {
      return {
        title,
        text,
        subtitle: `${specificationItems?.length ?? 0} FAQ items`,
      };
    },
  },
});

export default productSpecificationDocumentType;
