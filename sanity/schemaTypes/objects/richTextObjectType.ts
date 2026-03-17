import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

const richTextObjectType = defineType({
  name: "richText",
  title: "Rich Text Section",
  description: "Rich text section that can be rendered onto pages.",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "richText",
      title: "Rich Text Block",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export default richTextObjectType;
