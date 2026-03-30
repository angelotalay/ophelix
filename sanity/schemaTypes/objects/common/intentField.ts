import { defineField } from "sanity";
import { ColorWheelIcon } from "@sanity/icons";

const intentField = defineField({
  name: "intent",
  title: "Intent (Colour)",
  description: "Set the background colour or theme of the content",
  icon: ColorWheelIcon,
  type: "string",
  options: {
    list: [
      { title: "Primary", value: "primary" },
      { title: "Muted", value: "muted" },
      { title: "Dark", value: "dark" },
      { title: "Neutral", value: "neutral" },
      { title: "White", value: "white" },
    ],
    layout: "radio",
  },
});

export default intentField;
