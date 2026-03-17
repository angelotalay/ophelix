import {defineType, defineField} from "sanity";
import {BlockElementIcon} from '@sanity/icons'

const splitCtaObjectType = defineType({
  name: "splitCtaSection",
  title: "Split CTA",
  description: "A 2 column CTA section with optional button navigation.",
  type: "object",
  icon: BlockElementIcon,
  fieldsets: [
    {
      name: "navigationButtons",
      title: "Navigation Buttons (Optional)",
      options: {
        columns: 2
      }
    }
  ],
  fields : [
    defineField({
      name: "title",
      title: "Title",
      description: "The CTA title",
      type: "text",
      validation: rule => rule.required()
    }),
    defineField({
      name: "text",
      title: "CTA Text",
      description: "The CTA description text",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "CTA Image",
      description: "The CTA Image",
      type: "image",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "ctaNavigation1",
      title: "CTA Navigation Link 1",
      type: "reference",
      to: {type: "navigation"},
      fieldset: "navigationButtons"
    }),
    defineField({
      name: "ctaNavigation2",
      title: "CTA Navigation Link 2",
      type: "reference",
      to: {type: "navigation"},
      fieldset: "navigationButtons"
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
});

export default splitCtaObjectType