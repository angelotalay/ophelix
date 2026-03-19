import { defineType, defineField } from "sanity";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";
import { ImageIcon } from "@sanity/icons";

const DOCUMENTS = DOCUMENT_OBJECTS.DOCUMENTS;
const COMMON_OBJECTS = DOCUMENT_OBJECTS.COMMON_OBJECTS;

const imageCarouselDocumentType = defineType({
  name: DOCUMENTS.carousel,
  title: "Media Carousel",
  description: "Carousel content that can store any amount of images.",
  type: "document",
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
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        defineField({
          name: "carouselImage",
          title: "Carousel Image",
          type: COMMON_OBJECTS.imageAsset,
          validation: (rule) =>
            rule.min(1).error("At least one image is required."),
        }),
      ],
    }),
  ],
});

export default imageCarouselDocumentType;
