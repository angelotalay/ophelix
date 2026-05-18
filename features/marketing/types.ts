import type { Get } from "@sanity/codegen";
import { MarketingPageQueryResult } from "@/sanity/types";

type NonNullableQueryResult = NonNullable<MarketingPageQueryResult>
export type MarketingPageSectionType = Get<NonNullableQueryResult, "pageSections", number>;
