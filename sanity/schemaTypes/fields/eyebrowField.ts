import { defineField } from "sanity";

const eyebrowField = defineField({
  name: "eyebrow",
  title: "Eyebrow",
  description: "Short tag describing the essence of the CTA",
  type: "string",
});

export default eyebrowField;