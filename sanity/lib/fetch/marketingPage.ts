import { sanityFetch } from "@/sanity/lib/live";
import { MarketingPageQueryResult } from "@/sanity/types";
import marketingPageQuery from "@/sanity/lib/queries/marketingPage";




async function getMarketingPageQueryResult({slug} : {slug:string}): Promise<MarketingPageQueryResult> {
  const { data } = await sanityFetch({ query: marketingPageQuery, params: { slug } });
  return data;
}

export default getMarketingPageQueryResult;
