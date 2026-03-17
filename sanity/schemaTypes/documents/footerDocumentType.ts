import {defineType, defineField} from "sanity";
import {EditIcon} from '@sanity/icons'


const footerDocumentType = defineType({
  name: "footer",
  title: "Footer Content",
  description: "The content of the page footer",
  type: "document",
  icon: EditIcon,
  fields: [
    defineField({
      name: "companyDetails",
      title: "Company Details",
      type: "reference",
      to: {
        type: "company"
      },
      validation: rule => rule.required()
    })
  ]
});

export default footerDocumentType;