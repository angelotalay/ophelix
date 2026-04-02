import { defineField, defineType, defineArrayMember } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";
import { CalendarIcon } from "@sanity/icons";
import {
  DOCUMENTS,
  COMMON_OBJECTS,
  OBJECTS,
} from "@/sanity/schemaTypes/constants";

const PAGE_TYPES = {
  LANDING: "landing",
  DOCUMENTATION: "documentation",
} as const;

type PageSection = {
  _type?: string;
};

/**
 * Type-guard to check the section object from sanity validation before
 * accessing value._type. Used because section is not strongly typed and easily
 * leads to ESLint warnings
 */
function isPageSection(value: unknown): value is PageSection {
  return typeof value === "object" && value !== null && "_type" in value;
}

const pageDocumentType = defineType({
  name: "page",
  title: "Website Pages",
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
      name: "pageType",
      title: "Page Type",
      description: "The type of page you are publishing",
      type: "string",
      options: {
        list: [
          { title: "Landing Page", value: PAGE_TYPES.LANDING },
          { title: "Documentation", value: PAGE_TYPES.DOCUMENTATION },
        ],
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
      validation: (Rule) =>
        Rule.custom((sections, context) => {
          const document = context.document as { pageType?: string };

          if (!Array.isArray(sections)) {
            return true;
          }

          const isLandingPage = document.pageType === "landing";
          const hasRichText = sections
            .filter(isPageSection)
            .some((section) => section._type === "richText");

          if (isLandingPage && hasRichText) {
            return 'Landing pages cannot include a "Rich Text" section.';
          }

          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default pageDocumentType;
