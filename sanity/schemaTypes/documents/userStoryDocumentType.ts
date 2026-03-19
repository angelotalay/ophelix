import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

const userStoryDocumentType = defineType({
  name: "userStorySection",
  title: "User Story Section",
  description: "A list of text and images that builds up a user story.",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "User Story Headline",
      type: "text",
      description: "The title for the user story",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtext",
      title: "User Story Headline Subtext",
      type: "string",
      description: "Extra subtext for the headline.",
    }),
    defineField({
      name: "headlineImage",
      title: "User Story Headline Background Image",
      type: "imageAsset",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "storyBlocks",
      type: "array",
      of: [{ type: "userStoryInstance" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "headlineImage.image",
    },
  },
});

export default userStoryDocumentType;
