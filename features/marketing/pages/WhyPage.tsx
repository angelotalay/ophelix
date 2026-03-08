import React from "react";

import MarketingPageTemplate from "@/features/marketing/templates/MarketingPageTemplate";
import HERO_CONTENT from "@/features/marketing/pages/whyPage.copy";

function WhyPage() {
  return (
    <MarketingPageTemplate
      title={HERO_CONTENT.title}
      text={HERO_CONTENT.text}
      src={HERO_CONTENT.imagePath}
    >
      <div></div>
    </MarketingPageTemplate>
  );
}

export default WhyPage;
