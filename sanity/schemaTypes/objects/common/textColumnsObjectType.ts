import { defineType, defineField, defineArrayMember } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";


const columnArrayMembers = [
  defineArrayMember({type: COMMON_OBJECTS.richText}),
];

const textColumnsObjectType = defineType({
  name: COMMON_OBJECTS.textColumns,
  title: "Two column rich text section",
  description: "Two columns that can contain rich text.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "leftColumn",
      title: "Left Column",
      type: "array",
      of: columnArrayMembers,
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "rightColumn",
      title: "Right Column",
      type: "array",
      of: columnArrayMembers,
      validation: (rule) => rule.required().min(1),
    })
  ],
});

export default textColumnsObjectType;
