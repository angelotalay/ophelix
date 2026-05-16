import { defineField } from "sanity";

export const ALIGNMENT_TYPES = [
  { title: "Left", value: "left" },
  { title: "Right", value: "right" },
  { title: "Center", value: "center" },
];

const alignmentField = defineField({
  name: "alignment",
  title: "Alignment",
  description: "Set how the content is aligned in the block section.",
  type: "string",
  options: {
    list: ALIGNMENT_TYPES,
    layout: "radio",
  },
  validation: (rule) => rule.required(),
});

export default alignmentField;
