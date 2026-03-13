import {defineType, defineField} from "sanity";

const navigationObjectType = defineType({
  name: "navigation",
  title: "Navigation",
  description: "The title and link for all buttons or links",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Navigation Title",
      description: "The title of the button or link",
      type: "string",
      validation: rule => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Navigation Slug",
      description: "The link of the button for internal navigation",
      type: "slug",
      validation: rule => rule.required()
    }),
    defineField({
      name: "link",
      title: "Navigation Link",
      description: "The link of the button for external navigation",
      type: "url",
    })
  ]
});

export default navigationObjectType;