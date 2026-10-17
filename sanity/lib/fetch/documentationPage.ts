import { sanityFetch } from "@/sanity/lib/live";
import documentationPageQuery from "@/sanity/lib/queries/documentationPage";
import { DocumentationPageQueryResult } from "@/sanity/types";

async function getDocumentationPageQueryResult({
  slug,
}: {
  slug: string;
}): Promise<DocumentationPageQueryResult> {
  const { data } = await sanityFetch({
    query: documentationPageQuery,
    params: { slug },
    stega: false,
  });
  return data;
}

export default getDocumentationPageQueryResult;
