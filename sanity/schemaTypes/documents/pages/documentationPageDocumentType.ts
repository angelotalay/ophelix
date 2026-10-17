import { defineField, defineType, defineArrayMember } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons/EarthGlobe";
import { CalendarIcon } from "@sanity/icons/Calendar";
import {
  DOCUMENTS,
  COMMON_OBJECTS,
  OBJECTS,
} from "@/sanity/schemaTypes/constants";


const documentationPageDocumentType = defineType({
  name: "documentationPage",
  title: "Documentation Pages",
  type: "document",
  icon: EarthGlobeIcon,
  fieldsets: [
    {
      name: "dates",
      title: "Dates",
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
      name:"text",
      title: "Text",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      icon: CalendarIcon,
      fieldset: "dates",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      icon: CalendarIcon,
      fieldset: "dates",
    }),
    defineField({
      name: "pageSections",
      title: "Page Sections",
      type: "array",
      of: [
        defineArrayMember({ type: COMMON_OBJECTS.richText }),
        defineArrayMember({ type: OBJECTS.faqSection }),
      ],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default documentationPageDocumentType;
