import {ctaSectionFragment, heroSectionFragment, splitSectionFragment, headlineSectionFragment} from "@/sanity/lib/queries/fragments/pageSections"
import {OBJECTS, COMMON_OBJECTS, DOCUMENTS} from "@/sanity/schemaTypes/constants";

const marketingPageContentFragment: string = `{
  _type,
  _key,

  _type == "${OBJECTS.hero}" => ${heroSectionFragment},
  _type == "${OBJECTS.splitCta}" => ${splitSectionFragment},
  _type == "${OBJECTS.cta}" => ${ctaSectionFragment},

  _type == "${COMMON_OBJECTS.imageAsset}" => {
    ...,
    image
  },

  _type == "${DOCUMENTS.userStory}" => {
    ...
  },

  _type == "${OBJECTS.carousel}" => {
    ...
  },

  _type == "${OBJECTS.testimonials}" => {
    ...
  },

  _type == "${OBJECTS.headline}" => ${headlineSectionFragment}
}`;

export default marketingPageContentFragment