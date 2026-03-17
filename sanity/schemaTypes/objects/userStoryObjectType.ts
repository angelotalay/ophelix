import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const userStoryInstanceObjectType = defineType({
  name: "userStoryInstance",
  title: "User Story Block",
  description:
    "A single block of text and image that builds of the user story section.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "Text",
      type: "text",
      description: "The text block for the user story",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const userStoryObjectType = defineType({
  name: "userStorySection",
  title: "User Story Section",
  description: "A list of text and images that builds up a user story.",
  type: "object",
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
      name: "image",
      title: "User Story Headline Background Image",
      type: "image",
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
      media: "image",
    },
  },
});
