import { landingPageQuery } from "@/sanity/lib/queries/landingPage";
import { sanityFetch } from "@/sanity/lib/live";
import { LandingPageQueryResult } from "@/sanity/types";

async function getLandingPageQueryResult(): Promise<LandingPageQueryResult> {
  const { data } = await sanityFetch({ query: landingPageQuery, stega: false });
  return data;
}

export default getLandingPageQueryResult;
