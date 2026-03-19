import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

const testimonialDocumentType = defineType({
  name: "testimonial",
  title: "Testimonial",
  description: "Positive review of a particular customer",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "rating",
      title: "Customer rating",
      type: "number",
      validation: (rule) =>
        rule.max(5).min(1).error("The rating must be between 1 and 5"),
    }),
    defineField({
      name: "testimonialText",
      title: "Testimonial Text",
      description: "Given testimonial of the customer",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "occupation",
      title: "Customer Occupation",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Customer Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default testimonialDocumentType;
