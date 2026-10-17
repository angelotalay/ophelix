import { faqSectionFragment } from "@/sanity/lib/queries/fragments/pageSections";

import { OBJECTS, COMMON_OBJECTS } from "@/sanity/schemaTypes/constants";

const documentationPageContentFragment = `{
  _type,
  _key,
  _type == "${COMMON_OBJECTS.richText}" => {
    ...
  },

  _type == "${OBJECTS.faqSection}" => ${faqSectionFragment},
}` as const;

export default documentationPageContentFragment;
