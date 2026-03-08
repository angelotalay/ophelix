import React from "react";

import MarketingPageTemplate from "@/features/marketing/templates/MarketingPageTemplate";
import HeadlineBlock from "@/features/marketing/components/headlineBlock/HeadlineBlock";
import CarouselHeadline from "@/features/marketing/components/carouselHeadline/CarouselHeadline";
import HERO_CONTENT from "@/features/marketing/pages/whyPage.copy";
import HeadlineBlockCopy from "@/features/marketing/components/headlineBlock/headlineBlock.copy";

function WhyPage() {
  return (
    <MarketingPageTemplate
      title={HERO_CONTENT.title}
      text={HERO_CONTENT.text}
      src={HERO_CONTENT.imagePath}
    >
      <HeadlineBlock
        tag={HeadlineBlockCopy.HEADLINE_BLOCK_CONTENT.tag}
        title={HeadlineBlockCopy.HEADLINE_BLOCK_CONTENT.title}
        text={HeadlineBlockCopy.HEADLINE_BLOCK_CONTENT.text}
        intent={"background"}
      />
      <HeadlineBlock
        tag={HeadlineBlockCopy.HEADLINE_BLOCK_CONTENT_2.tag}
        title={HeadlineBlockCopy.HEADLINE_BLOCK_CONTENT_2.title}
        text={HeadlineBlockCopy.HEADLINE_BLOCK_CONTENT_2.text}
        intent={"extra-dark"}
      />
      <CarouselHeadline />
    </MarketingPageTemplate>
  );
}

export default WhyPage;
