import { landingPageQuery } from "@/sanity/lib/queries/landingPage";
import { client } from "@/sanity/lib/client";
import { LandingPageQueryResult } from "@/sanity/types";

async function getLandingPageQueryResult(): Promise<LandingPageQueryResult> {
  return client.fetch(landingPageQuery);
}

export default getLandingPageQueryResult;
