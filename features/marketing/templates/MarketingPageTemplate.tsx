import React from "react";

import PageHero from "@/features/marketing/components/pageHero/PageHero";

interface MarketingPageTemplateProps {
  title: string;
  src: string;
  text: string;
  children: React.ReactNode;
}

function MarketingPageTemplate({
  title,
  text,
  src,
  children,
}: MarketingPageTemplateProps) {
  return (
    <div>
      <PageHero title={title} src={src} text={text} />
      {children}
    </div>
  );
}

export default MarketingPageTemplate;
