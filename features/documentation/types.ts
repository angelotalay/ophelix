import type { Get } from "@sanity/codegen";
import { DocumentationPageQueryResult } from "@/sanity/types";

type NonNullableQueryResult = NonNullable<DocumentationPageQueryResult>;
export type DocumentationPageSectionType = Get<
  NonNullableQueryResult,
  "pageSections",
  number
>;
