import { defineType, defineField, defineArrayMember } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { DOCUMENTS, OBJECTS } from "@/sanity/schemaTypes/constants";

// How do we display the preview for this?
const testimonialsObjectType = defineType({
  name: OBJECTS.testimonials,
  title: "Customer Testimonials",
  description: "A collection of customer testimonials reviewing products.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtext",
      title: "Subtext",
      type: "string",
    }),
    defineField({
      name: "testimonialList",
      title: "All Testimonials",
      type: "array",
      of: [defineArrayMember({ type: DOCUMENTS.testimonial })],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default testimonialsObjectType;
