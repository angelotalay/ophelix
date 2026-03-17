import { defineField, defineType } from "sanity";

const addressObjectType = defineType({
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    defineField({
      name: "streetName",
      title: "Street Name",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "streetNumber",
      title: "Street Number",
      type: "string",
      validation: rule => rule.required(),

    }),
    defineField({
      name: "postCode",
      title: "Post Code",
      type: "string",
      validation: rule => rule.required(),
    }),
  ],
});

export default addressObjectType;
