import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { DOCUMENTS, COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const heroDocumentType = defineType({
  name: DOCUMENTS.hero,
  title: "Hero",
  description:
    "Hero section of a webpage that introduces the content with text " +
    "overlaid on either an image or video",
  type: "document",
  icon: BlockElementIcon,
  fieldsets: [
    {
      name: "navigationButtons",
      title: "Navigation Buttons (Optional)",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "text",
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
      type: COMMON_OBJECTS.imageAsset,
      hidden: ({ parent, value }) => !value && !!parent?.muxVideo,
    }),
    defineField({
      name: "muxVideo",
      title: "Hero Mux Video",
      description:
        "The hero video displayed at the top of the page with a title.",
      type: "mux.video",
      hidden: ({ parent, value }) => !value && !!parent?.heroImage,
    }),
    defineField({
      name: "heroNavigation1",
      title: "Hero Navigation Link 1",
      type: COMMON_OBJECTS.navigationLink,
      fieldset: "navigationButtons",
    }),
    defineField({
      name: "heroNavigation2",
      title: "Hero Navigation Link 2",
      type: COMMON_OBJECTS.navigationLink,
      fieldset: "navigationButtons",
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
  preview: {
    select: {
      title: "title",
      media: "heroImage.image",
    },
  },
});

export default heroDocumentType;
