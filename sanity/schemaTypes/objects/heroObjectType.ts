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
      description: "The hero image displayed at the top of the page with a title.",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent, value }) => !value && !!parent?.muxVideo,
    }),
    defineField({
      name: "muxVideo",
      title: "Hero Mux Video",
      description: "The hero video displayed at the top of the page with a title.",
      type: "mux.video",
      hidden: ({ parent, value }) => !value && !!parent?.heroImage,
    }),
  ],
  validation: (Rule) =>
    Rule.custom((value) => {
      const hasImage = !!value?.heroImage;
      const hasVideo = !!value?.muxVideo;

      if (hasImage && hasVideo) {
        return "Only one of Hero Image or Hero Mux Video can be set.";
      }

      if (!hasImage && !hasVideo) {
        return "You must provide either a Hero Image or a Hero Mux Video.";
      }

      return true;
    }),
});

export default heroObjectType;
