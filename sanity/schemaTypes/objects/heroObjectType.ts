import { defineType, defineField } from "sanity";

const heroObjectType = defineType({
  name: "heroSection",
  title: "Hero Section",
  description:
    "Hero section of a webpage that introduces the content with text " +
    "overlaid on either an image or video",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroText",
      title: "Hero Text",
      description: "Description of the purpose of the page",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      description:
        "The hero image displayed at the top of the page with a title.",
      type: "image",
    }),
    defineField({
      name: "heroVideo",
      title: "Hero Video",
      description:
        "The hero image displayed at the top of the page with a title.",
      type: "image",
    }),
    defineField({
      name:"muxVideo",
      title: "Hero Mux Video",
      description: "The hero video displayed at the top of the page with a title",
      type: "mux.video"
    })
  ],
});

export default heroObjectType;
