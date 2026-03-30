import { defineType, defineField } from "sanity";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

export const ALIGNMENT_TYPES = [
  { title: "Left", value: "left" },
  { title: "Right", value: "right" },
  { title: "Center", value: "center" },
];

const alignmentObjectType = defineType({
  name: COMMON_OBJECTS.alignment,
  title: "Alignment Layout",
  description: "Set how the content is aligned in the block section.",
  type: "object",
  fields: [
    defineField({
      name: "alignmentType",
      title: "Alignment Type",
      type: "string",
      options: {
        list: [...ALIGNMENT_TYPES],
        layout: "radio",
      },
    }),
  ],
});

export default alignmentObjectType;
