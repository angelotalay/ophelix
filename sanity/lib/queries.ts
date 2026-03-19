import { defineQuery } from "next-sanity";

export const landingPageQuery = defineQuery(`*[_type == $type][0]{
  landingPage -> {
    pageSections
  }
}`);
