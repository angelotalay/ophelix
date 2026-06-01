import { defineQuery } from "next-sanity";
import documentationPageContentFragment from "@/sanity/lib/queries/fragments/documentationPageContentFragment";

const documentationPageQuery = defineQuery(`
  *[_type == "documentationPage" && slug.current == $slug][0] {
    title,
    text,
    created_at,
    updated_at,
    "pageSections": pageSections[]${documentationPageContentFragment}
  }
`);

export default documentationPageQuery;
