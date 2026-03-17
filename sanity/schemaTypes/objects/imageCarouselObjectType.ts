import { defineType, defineField } from "sanity";

const imageCarouselObjectType = defineType({
  name: "imageCarouselSection",
  title: "Image Carousel Section",
  description: "A carousel section that can store any amount of images.",
  type: "object",
  fields: [
    defineField({
      name: "headline",
      title: "Headline Title",
      description: "Large title above the carousel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        defineField({
          name: "carouselImage",
          title: "Carousel Image",
          type: "imageAsset",
          validation: (rule) =>
            rule.min(1).error("At least one image is required."),
        }),
      ],
    }),
  ],
});

export default imageCarouselObjectType;
