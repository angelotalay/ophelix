import { defineType, defineField } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import DOCUMENT_OBJECTS from "@/sanity/schemaTypes/constants";

const OBJECTS = DOCUMENT_OBJECTS.OBJECTS;

const heroObjectType = defineType({
  name: OBJECTS.hero,
  title: "Hero Section",
  description:
    "Hero section of a webpage that introduces the content with text " +
    "overlaid on either an image or video",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "reference",
      to: { type: "hero" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alignment",
      title: "Content alignment",
      description: "Set how the content is aligned to its container.",
      type: "alignment",
      initialValue: "center",
    }),
  ],

  preview: {
    select: {
      title: "hero.title",
      media: "hero.heroImage.image",
    },
  },
});

export default heroObjectType;
