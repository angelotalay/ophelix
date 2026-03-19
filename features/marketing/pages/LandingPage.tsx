import React from "react";
import Hero from "@/features/marketing/components/hero/Hero";
import FeatureImage from "@/features/marketing/components/featureImage/FeatureImage";
import SplitCTA from "@/features/marketing/components/splitCta/SplitCTA";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta/splitCta.copy";
import CustomerStory from "@/features/marketing/components/customerStory/CustomerStory";
import CarouselHeadline from "@/features/marketing/components/carouselHeadline/CarouselHeadline";
import Testimonials from "@/features/marketing/components/testimonials/Testomonials";
import CTA from "@/features/marketing/components/cta/CTA";
import Stack from "@/components/layout/Stack";
import RoundedButton from "@/components/buttons/RoundedButton";

function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureImage intent={"background"} />
      <SplitCTA
        intent={"background"}
        title={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.title}
        tag={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.tag}
        descriptions={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.description}
      />
      <CustomerStory />
      <SplitCTA
        intent={"extra-dark"}
        title={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.title}
        tag={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.tag}
        descriptions={SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT_2.descriptions}
        src={"/images/placeholder_image_3.png"}
      />
      <CarouselHeadline className="bg-background-grey" />
      <Testimonials className="bg-white" />
      <CTA align={"left"}>
        <Stack orientation="horizontal" gap="sm">
          <RoundedButton intent="primary" size="lg">
            Shop Jewel
          </RoundedButton>
          <RoundedButton
            intent="background"
            variant="outline"
            className="border-background bg-transparent text-background"
            size={"lg"}
          >
            Explore
          </RoundedButton>
        </Stack>
      </CTA>
    </>
  );
}

export default LandingPage;
