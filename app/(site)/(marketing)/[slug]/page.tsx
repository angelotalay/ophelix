import React from "react";
import getMarketingPageQueryResult from "@/sanity/lib/fetch/marketingPage";
import {MarketingPageQueryResult} from "@/sanity/types";
import renderComponents, {
  type LandingPageSection,
} from "@/features/pageBuilder/marketingPageBuilder";


async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const marketingPageQueryResult: MarketingPageQueryResult =
    await getMarketingPageQueryResult({ slug });

  // We need an error boundary here// Basic guard clause
  if (!marketingPageQueryResult?.pageSections) {
    return null; // Or a 404/Error view
  }
  const pageSections = marketingPageQueryResult.pageSections;
  if (!pageSections.length) return;
  const [firstSection, ...remainingSections] = pageSections;

  return (
    <main>
      <div className="marketing-page__first-section">
        {renderComponents(firstSection)}
      </div>
      {remainingSections.map((section: LandingPageSection) => {
        return renderComponents(section);
      })}
    </main>
  );
};

export default Page;