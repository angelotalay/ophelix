import { defineType, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";
import { COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const imageAssetObjectType = defineType({
  name: COMMON_OBJECTS.imageAsset,
  title: "Image Asset",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description: "Describe the image for accessibility.",
      validation: (rule) => rule.required().error("Alt text is required."),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "attribution",
      title: "Attribution",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "alt",
      media: "image",
      subtitle: "caption",
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title || "Untitled image",
        subtitle: subtitle,
        media,
      };
    },
  },
});

export default imageAssetObjectType;
