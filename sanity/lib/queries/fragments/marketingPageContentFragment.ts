import {
  ctaSectionFragment,
  heroSectionFragment,
  splitCtaSectionFragment,
  headlineSectionFragment,
  splitSectionFragment,
  faqSectionFragment,
  productSpecificationFragment,
} from "@/sanity/lib/queries/fragments/pageSections";

import {
  OBJECTS,
  COMMON_OBJECTS,
  DOCUMENTS,
} from "@/sanity/schemaTypes/constants";

const marketingPageContentFragment = `{
  _type,
  _key,

  _type == "${OBJECTS.hero}" => ${heroSectionFragment},
  _type == "${OBJECTS.splitCta}" => ${splitCtaSectionFragment},
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

  _type == "${OBJECTS.headline}" => ${headlineSectionFragment}, 
  
  _type == "${OBJECTS.splitSection}" => ${splitSectionFragment}, 
  
  _type == "${OBJECTS.faqSection}" => ${faqSectionFragment},
  
  _type == "${DOCUMENTS.productSpecification}" => ${productSpecificationFragment},
}` as const;

export default marketingPageContentFragment;
