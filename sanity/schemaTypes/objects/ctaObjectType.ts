import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

const ctaObjectType = defineType({
  name: "ctaSection",
  title: "CTA section",
  description:
    "CTA section that contains text and optional CTA buttons over a background image",
  type: "object",
  icon: BlockElementIcon,
  fieldsets: [
    {
      name: "navigationButtons",
      title: "Navigation Buttons (Optional)",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      description: "CTA description.",
      type: "text",
    }),
    defineField({
      name: "ctaNavigation1",
      title: "CTA Navigation Link 1",
      type: "navigation",
      fieldset: "navigationButtons",
    }),
    defineField({
      name: "ctaNavigation2",
      title: "CTA Navigation Link 2",
      type: "navigation",
      fieldset: "navigationButtons",
    }),
    defineField({
      name: "alignment",
      title: "Content Alignment",
      description: "How the content is aligned in the container of the section",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "Right" },
        ],
      },
    }),
  ],
});

export default ctaObjectType;
