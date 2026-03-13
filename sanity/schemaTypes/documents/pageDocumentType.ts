import { defineField, defineType } from "sanity";

const pageDocumentType = defineType({
  name: "page",
  title: "Website Page",
  type: "document",
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
    }),
    defineField({
      name: "pageType",
      title: "Page Type",
      description: "The type of page you are publishing",
      type: "string",
      // This may have to be in some sort of constants file
      options: {
        list: [{title: "Landing Page", value: "landing"}, {title: "Documentation", value: "documentation"}],
      }

    }),
    defineField({
      name: "pageSections",
      title: "Page Sections",
      type: "array",
      of: [{ type: "image" }, { type: "heroSection" }, {type: "splitCtaSection"}, {type: "block"}, {type: "ctaSection"}, {type: "userStorySection"} ],
    }),
  ],
});

export default pageDocumentType;
