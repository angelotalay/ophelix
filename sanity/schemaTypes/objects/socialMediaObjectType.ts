import { defineType, defineField } from "sanity";

const socialMediaObjectType = defineType({
  name: "socialMedia",
  title: "Social Media",
  description: "Social Media Link",
  type: "object",
  fields: [
    defineField({
      name: "socialMediaTitle",
      title: "Social Media",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socialMediaLink",
      title: "Social Media Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});

export default socialMediaObjectType;
