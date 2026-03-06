import React from "react";
import Hero from "@/features/marketing/components/hero/Hero";
import FeatureImage from "@/features/marketing/components/featureImage/FeatureImage";
import SplitCTA from "@/features/marketing/components/splitCta/SplitCTA";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta/splitCta.copy";
import CustomerStory from "@/features/marketing/components/customerStory/CustsomerStory";
import CarouselHeadline from "@/features/marketing/components/carouselHeadline/CarouselHeadline";

function LandingPage() {
  return (
    // The div here should probably be a Section component
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <FeatureImage color={"background"} />
      </div>
      <div className="w-full">
        <SplitCTA intent={"primary"} />
      </div>
      <div>
        <CustomerStory />
      </div>
      <div className={"w-full bg-extra-dark"}>
        <SplitCTA
          intent={"extra-dark"}
          title={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.title}
          tag={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.tag}
          descriptions={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.descriptions}
          src={"/images/placeholder_image_3.png"}
        />
      </div>
      <div>
        <CarouselHeadline />
      </div>
    </div>
  );
}

export default LandingPage;
