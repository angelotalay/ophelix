import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";

const OBJECTS = DOCUMENT_OBJECTS.OBJECTS;

const userStoryInstanceObjectType = defineType({
  name: OBJECTS.userStory,
  title: "User Story Block",
  description:
    "A single block of text and image that builds of the user story section.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "storyText",
      title: "Story Text",
      type: "text",
      description: "The text block for the user story",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "userStoryImage",
      title: "Background Image",
      type: "imageAsset",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "storyText",
      media: "userStoryImage.image",
    },
  },
});

export default userStoryInstanceObjectType;
