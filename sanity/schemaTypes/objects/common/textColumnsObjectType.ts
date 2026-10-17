import { defineType, defineField, defineArrayMember } from "sanity";
import { BlockElementIcon } from "@sanity/icons/BlockElement";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const columnArrayMembers = [
  defineArrayMember({ type: COMMON_OBJECTS.richText }),
];

const getColumnLabel = (column?: unknown[]) => {
  if (!column?.length) return "Empty";

  return `${column.length} rich text block${column.length > 1 ? "s" : ""}`;
};

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
    }),
  ],

  preview: {
    select: {
      leftColumn: "leftColumn",
      rightColumn: "rightColumn",
    },
    prepare({ leftColumn, rightColumn }) {
      return {
        title: "Two column rich text section",
        subtitle: `Left: ${getColumnLabel(leftColumn)} | Right: ${getColumnLabel(
          rightColumn,
        )}`,
        media: BlockElementIcon,
      };
    },
  },
});

export default textColumnsObjectType;
