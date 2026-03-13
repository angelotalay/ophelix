import {defineType, defineField} from "sanity";

const splitCtaObjectType = defineType({
  name: "splitCtaSection",
  title: "Split CTA",
  description: "A 2 column CTA section with optional button navigation.",
  type: "object",
  fields : [
    defineField({
      name: "title",
      title: "Title",
      description: "The CTA title",
      type: "string",
      validation: rule => rule.required()
    }),
    defineField({
      name: "text",
      title: "CTA Text",
      description: "The CTA description text",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "CTA Image",
      description: "The CTA Image",
      type: "image",
    }),
  ]
});

export default splitCtaObjectType