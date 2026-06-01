import {
  ctaSectionFragment,
  heroSectionFragment,
  splitCtaSectionFragment,
  headlineSectionFragment,
  splitSectionFragment,
  faqSectionFragment,
} from "@/sanity/lib/queries/fragments/pageSections";

import {
  OBJECTS,
  COMMON_OBJECTS,
  DOCUMENTS,
} from "@/sanity/schemaTypes/constants";

const documentationPageContentFragment: string = `{
  _type,
  _key,
  _type == "${COMMON_OBJECTS.richText}" => {
    ...
  },

  _type == "${OBJECTS.faqSection}" => ${faqSectionFragment},
}`;

export default documentationPageContentFragment;
