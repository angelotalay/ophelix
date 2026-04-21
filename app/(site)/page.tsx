import React from "react";

import getLandingPageQueryResult from "@/sanity/lib/fetch/landingPage";
import { LandingPageQueryResult } from "@/sanity/types";
import renderComponents from "@/features/pageBuilder/marketingPageBuilder";
import type { LandingPageSection } from "@/features/pageBuilder/marketingPageBuilder";

async function LandingPage() {
  const landingPageQuery: LandingPageQueryResult =
    await getLandingPageQueryResult();

  // We need an error boundary here// Basic guard clause
  if (!landingPageQuery?.pageSections) {
    return null; // Or a 404/Error view
  }
  const pageSections = landingPageQuery.pageSections;
  if (!pageSections.length) return;
  const [firstSection, ...remainingSections] = pageSections;

  return (
    <main>
      <div className="landing-page__first-section">
        {renderComponents(firstSection)}
      </div>
      {remainingSections.map((section: LandingPageSection) => {
        return renderComponents(section);
      })}
    </main>
  );
}

export default LandingPage;
