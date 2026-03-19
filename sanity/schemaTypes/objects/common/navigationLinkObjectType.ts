import { defineType, defineField } from "sanity";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";

const COMMON_OBJECTS = DOCUMENT_OBJECTS.COMMON_OBJECTS;

const navigationLinkObjectType = defineType({
  name: COMMON_OBJECTS.navigationLink,
  title: "Navigation",
  description: "The title and link for all buttons or links",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Navigation Title",
      description: "The title of the button or link",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Link type",
      description: "Does the link lead to an internal or external page?",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "internalLink",
      title: "Internal Link",
      description: "The link of the button for internal navigation",
      type: "string",
      hidden: ({ parent, value }) => !value && !!parent?.link,
      //   At some point we should maybe do some zod validation here?
    }),
    defineField({
      name: "link",
      title: "Navigation Link",
      description: "The link of the button for external navigation",
      type: "url",
      hidden: ({ parent, value }) => !value && !!parent?.internalLink,
    }),
  ],
  validation: (rule) =>
    rule.custom((fields) => {
      const hasLink = !!fields?.link;
      const hasSlug = !!fields?.internalLink;
      if (hasLink && hasSlug) {
        return "Only a link or a slug can be set for a navigation object.";
      }
      if (!hasLink && !hasSlug) {
        return "Either a link or a slug must be provided.";
      }
      return true;
    }),
});

export default navigationLinkObjectType;
