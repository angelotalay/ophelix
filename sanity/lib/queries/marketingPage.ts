import { defineQuery } from "next-sanity";
import marketingPageContentFragment from "@/sanity/lib/queries/fragments/marketingPageContentFragment";

const marketingPageQuery = defineQuery(`
  *[_type == "marketingPage" && slug.current == $slug][0] {
    "pageSections": pageSections[] 
      ${marketingPageContentFragment}
   }   
`);

export default marketingPageQuery;

