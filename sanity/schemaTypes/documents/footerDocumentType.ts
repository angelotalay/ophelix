import {defineType, defineField} from "sanity";


const footerDocumentType = defineType({
  name: "footer",
  title: "Footer Content",
  description: "The content of the page footer",
  type: "document",
  fields: [
    defineField({
      name: "companyDetails",
      title: "Company Details",
      type: "reference",
      to: {
        type: "companyDetails"
      },
      validation: rule => rule.required()
    })
  ]
});

export default footerDocumentType;