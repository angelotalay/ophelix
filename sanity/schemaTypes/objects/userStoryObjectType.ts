import {defineType, defineField} from "sanity";

export const userStoryInstanceObjectType = defineType({
  name: "userStoryInstance",
  title: "User Story Block",
  description: "A single block of text and image that builds of the user story section.",
  type: "object",
  fields: [
    defineField({
      name: "Text",
      type: "text",
      description: "The text block for the user story",
      validation: rule => rule.required()
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      validation: rule => rule.required()
    })
  ]
});

export const userStoryObjectType = defineType({
  name: "userStorySection",
  title: "User Story Section",
  description: "A list of text and images that builds up a user story.",
  type: "object",
  fields: [
    defineField({
      name: "storyBlocks",
      type: "array",
      of: [{type: "userStoryInstance"}],
    })
  ]
});

