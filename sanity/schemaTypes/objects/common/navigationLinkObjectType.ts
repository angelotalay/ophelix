import { defineType, defineField } from "sanity";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const navigationLinkObjectType = defineType({
  name: COMMON_OBJECTS.navigationLink,
  title: "Navigation",
  description: "The title and link for all buttons or links",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Navigation Title",
      description:
        "The title of the button or link (Leave blank to skip this link)",
      type: "string",
      // Removed rule.required() to allow the object to be optional
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
      // Validation logic moved to the object level to allow "all or nothing"
    }),
    defineField({
      name: "internalLink",
      title: "Internal Link",
      description: "The link of the button for internal navigation",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "internal",
    }),
    defineField({
      name: "link",
      title: "Navigation Link",
      description: "The link of the button for external navigation",
      type: "url",
      hidden: ({ parent }) => parent?.type !== "external",
    }),
  ],
  validation: (rule) =>
    rule.custom((fields) => {
      // 1. If there is no title, we assume the user wants to skip this navigation entirely.
      if (!fields?.title) {
        return true;
      }

      // 2. If a title exists, enforce the rest of the rules.
      const hasLink = !!fields?.link;
      const hasInternal = !!fields?.internalLink;
      const hasType = !!fields?.type;

      if (!hasType) {
        return "Please select a Link Type (Internal or External).";
      }

      if (hasLink && hasInternal) {
        return "Only a link or an internal link can be set.";
      }

      if (!hasLink && !hasInternal) {
        return "A link must be provided if a title is set.";
      }

      return true;
    }),
});

export default navigationLinkObjectType;
