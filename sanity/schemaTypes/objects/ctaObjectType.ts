import {defineType, defineField} from "sanity";

const ctaObjectType = defineType({
  name: "ctaSection",
  title: "CTA section",
  description: "CTA section that contains text and optional CTA buttons over a background image",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      description: "CTA description.",
      type: "text",
    }),
    defineField({
      name: "ctaNavigation1",
      title: "CTA Navigation Link 1",
      description: "Optional CTA Button",
      type: "slug"
    }),
    defineField({
      name: "ctaNavigation2",
      title: "CTA Navigation Link 2",
      description: "Optional CTA Button",
      type: "slug"
    })
  ]
});

export default ctaObjectType;
