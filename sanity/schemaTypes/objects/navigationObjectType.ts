import {defineType, defineField} from "sanity";

const navigationObjectType = defineType({
  name: "navigation",
  title: "Navigation",
  description: "The title and link for all buttons or links",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Navigation Title",
      description: "The title of the button or link",
      type: "string",
      validation: rule => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Navigation Slug",
      description: "The link of the button for internal navigation",
      type: "slug",
      hidden: ({parent, value}) => !value && !!parent?.link
    }),
    defineField({
      name: "link",
      title: "Navigation Link",
      description: "The link of the button for external navigation",
      type: "url",
      hidden: ({parent, value}) => !value && !!parent?.slug
    })
  ],
  validation: rule => rule.custom((fields) => {
    const hasLink = !!fields?.link;
    const hasSlug = !!fields?.slug;
    if(hasLink && hasSlug){
      return("Only a link or a slug can be set for a navigation object.")
    }
    if(!hasLink && !hasSlug){
      return("Either a link or a slug must be provided.")
      }
    return true;
  })
});

export default navigationObjectType;