import { defineField, defineType } from "sanity";

const addressType = defineType({
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    defineField({
      name: "streetName",
      title: "Street Name",
      type: "string",
    }),
    defineField({
      name: "streetNumber",
      title: "Street Number",
      type: "string",
    }),
    defineField({
      name: "postCode",
      title: "Post Code",
      type: "string",
    }),
  ],
});

export default addressType;
