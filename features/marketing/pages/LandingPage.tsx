import React from "react";
import Hero from "@/features/marketing/components/hero/Hero";
import FeatureImage from "@/features/marketing/components/featureImage/FeatureImage";
import SplitCTA from "@/features/marketing/components/splitCta/SplitCTA";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta/splitCta.copy";
import CustomerStory from "@/features/marketing/components/customerStory/CustsomerStory";
import CarouselHeadline from "@/features/marketing/components/carouselHeadline/CarouselHeadline";
import Testimonials from "@/features/marketing/components/testimonials/Testomonials";

function LandingPage() {
  return (
    // The div here should probably be a Section component
    <div>
      <Hero />
      <FeatureImage color={"background"} />
      <SplitCTA intent={"primary"} />
      <CustomerStory />
      <div className={"w-full bg-extra-dark"}>
        <SplitCTA
          intent={"extra-dark"}
          title={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.title}
          tag={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.tag}
          descriptions={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.descriptions}
          src={"/images/placeholder_image_3.png"}
        />
      </div>
      <CarouselHeadline />
      <Testimonials />
    </div>
  );
}

export default LandingPage;
