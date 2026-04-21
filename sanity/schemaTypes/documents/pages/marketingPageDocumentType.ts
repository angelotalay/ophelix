import { defineField, defineType, defineArrayMember } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";
import { CalendarIcon } from "@sanity/icons";
import {
  DOCUMENTS,
  COMMON_OBJECTS,
  OBJECTS,
} from "@/sanity/schemaTypes/constants";


const marketingPageDocumentType = defineType({
  name: "marketingPage",
  title: "Marketing Pages",
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
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "title",
      },
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
        defineArrayMember({ type: OBJECTS.hero }),
        defineArrayMember({ type: OBJECTS.cta }),
        defineArrayMember({ type: OBJECTS.splitCta }),
        defineArrayMember({ type: DOCUMENTS.userStory }),
        defineArrayMember({ type: OBJECTS.testimonials }),
        defineArrayMember({ type: COMMON_OBJECTS.imageAsset }),
        defineArrayMember({ type: DOCUMENTS.carousel }),
      ],
     validation: rule => rule.min(1).required()
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default marketingPageDocumentType;
