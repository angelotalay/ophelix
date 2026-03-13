import {defineType, defineField} from "sanity";

const navigationHeaderDocument = defineType({
  name: "navigationHeader",
  title: "Navigation Bar Content",
  description: "All the content in the navigation bar",
  type: "document",
  fields: [
    defineField({
      name: "companyDetails",
      title: "Company Details",
      type: "reference",
      to: {
       type: "companyDetails"
      }
    }),
    defineField({
      name: "navigationLinks",
      title: "Navigation Links",
      description: "The buttons or links on the navigation bar that links to other resources",
      type: "array",
      of: [
        {type: "navigation"}
      ],
      validation: rule => rule.max(3)
    })

  ]

});
  export default navigationHeaderDocument;