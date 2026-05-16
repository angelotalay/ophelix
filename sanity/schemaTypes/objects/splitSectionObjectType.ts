import { defineType, defineField, defineArrayMember } from "sanity";
import intentField from "@/sanity/schemaTypes/fields/intentField";
import { InlineIcon } from "@sanity/icons";
import {COMMON_OBJECTS, OBJECTS} from "@/sanity/schemaTypes/constants";

const columnArrayMembers = [
  defineArrayMember({type: COMMON_OBJECTS.richText}),
  defineArrayMember({type: COMMON_OBJECTS.imageAsset})
];

const splitSectionObjectType = defineType({
  name: OBJECTS.splitSection,
  title: "Split Section",
  description: "A two column section containing either text or image content",
  type: "object",
  icon: InlineIcon,
  fields: [
    defineField({
      name: "leftColumn",
      title: "Left Column",
      description: "List of content to presented on the left column.",
      type: "array",
      of: columnArrayMembers,
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "rightColumn",
      title: "Right Column",
      description: "List of content to present in the right column",
      type: "array",
      of: columnArrayMembers,
      validation: (rule) => rule.required().min((length = 1)),
    }),
    defineField({ ...intentField, validation: (rule) => rule.required() }),
  ],
});

export default splitSectionObjectType;
