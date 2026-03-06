import React from "react";
import Hero from "@/features/marketing/components/Hero";
import FeatureImage from "@/features/marketing/components/FeatureImage";
import SplitCTA from "@/features/marketing/components/SplitCTA";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta.copy";
import CustomerStory from "@/features/marketing/components/CustsomerStory";
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
    </div>
  );
}

export default LandingPage;
