import { defineType, defineField } from "sanity";
import { OBJECTS, COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";
import { ImageIcon } from "@sanity/icons";

const imageCarouselObjectType = defineType({
  name: OBJECTS.carousel,
  title: "Media Carousel",
  description: "Carousel content that can store any amount of images.",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "headline",
      title: "Headline Title",
      description: "Large title above the carousel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headlineSubText",
      title: "Sub-text",
      type: "text",
    }),
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        defineField({
          name: "carouselImage",
          title: "Carousel Image",
          type: COMMON_OBJECTS.imageAsset,
        }),
      ],
      validation: (rule) =>
        rule.min(1).error("At least one image is required."),
    }),
  ],
});

export default imageCarouselObjectType;
