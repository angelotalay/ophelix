import {defineType, defineField} from "sanity";
import {PanelLeftIcon} from '@sanity/icons'

const navigationHeaderDocument = defineType({
  name: "navigationHeader",
  title: "Navigation Bar Content",
  description: "All the content in the navigation bar",
  type: "document",
  icon: PanelLeftIcon,
  fields: [
    defineField({
      name: "company",
      title: "Company Details",
      type: "reference",
      to: {
       type: "company"
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