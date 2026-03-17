import {defineType, defineField} from "sanity";
import {ControlsIcon} from "@sanity/icons";

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
      description: "Assign a page to be the landing page.",
      type: "reference",
      to: {
        type: "page"
      }
    }),
    defineField({
      name: "navbar",
      title: "Navigation Bar Header",
      description: "Assign a navigation header configuration to the website.",
      type: "reference",
      to: {
        type: "navigationHeader"
      }
    }),
    defineField({
      name: "footer",
      title: "Footer",
      description: "Assign a footer configuration to be the website footer",
      type: "reference",
      to: {
        type: "footer"
      }
    })
  ]
});

export default siteSettingsDocumentType;
