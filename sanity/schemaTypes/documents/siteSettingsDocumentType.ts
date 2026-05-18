import { defineType, defineField } from "sanity";
import { ControlsIcon } from "@sanity/icons";

const siteSettingsDocumentType = defineType({
  name: "siteSettings",
  title: "Website Settings",
  description: "Global website settings",
  type: "document",
  icon: ControlsIcon,
  fields: [
    defineField({
      name: "landingPage",
      title: "Landing Page",
      description:
        "Assign a page to be the landing page. Please note that the first page section will fill to the height of the device screen. It's recommended that the first page section be a hero.",
      type: "reference",
      to: {
        type: "marketingPage",
      },
    }),
    defineField({
      name: "navbar",
      title: "Navigation Bar Header",
      description: "Assign a navigation header configuration to the website.",
      type: "reference",
      to: {
        type: "navigationHeader",
      },
    }),
    defineField({
      name: "footer",
      title: "Footer",
      description: "Assign a footer configuration to be the website footer",
      type: "reference",
      to: {
        type: "footer",
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Global Website Settings",
        subtitle: "Manage your landing page, header, and footer",
      };
    },
  },
});

export default siteSettingsDocumentType;
