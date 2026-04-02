import React from "react";

import Hero from "@/features/marketing/components/hero/Hero";
import FeatureImage from "@/features/marketing/components/featureImage/FeatureImage";
import SplitCTA from "@/features/marketing/components/cta/SplitCTA";
import CustomerStory from "@/features/marketing/components/customerStory/CustomerStory";
import CarouselHeadline from "@/features/marketing/components/carouselHeadline/CarouselHeadline";
import Testimonials from "@/features/marketing/components/testimonials/Testomonials";
import CTA from "@/features/marketing/components/cta/CTA";

import {
  COMMON_OBJECTS,
  DOCUMENTS,
  OBJECTS,
} from "@/sanity/schemaTypes/constants";
import { LandingPageQueryResult } from "@/sanity/types";

export type LandingPageSection = NonNullable<
  NonNullable<LandingPageQueryResult>["pageSections"]
>[number];

function renderComponents(section: LandingPageSection) {
  switch (section._type) {
    case OBJECTS.hero:
      return (
        <Hero
          title={section.title || "DEFAULT TITLE"}
          text={section.text || "DEFAULT TEXT"}
          muxVideo={section.muxVideo?.playbackId || null}
          image={section.heroImage?.image || null}
          navigationButton1={section.heroNavigation1 || null}
          navigationButton2={section.heroNavigation2 || null}
          key={section._key}
        />
      );
    case OBJECTS.splitCta:
      return (
        <SplitCTA
          tag={section.eyebrow}
          title={section.title}
          text={section.ctaText}
          image={section.ctaImage}
          key={section._key}
          intent={section.intent}
        />
      );
    case COMMON_OBJECTS.imageAsset:
      return <FeatureImage key={section._key} image={section.image} />;
    case DOCUMENTS.userStory:
      return (
        <CustomerStory
          key={section._key}
          headlineTitle={section.title}
          headlineText={section.subtext}
          image={section.headlineImage}
          customerStoryBlocks={section.storyBlocks}
        />
      );
    case DOCUMENTS.carousel:
      return (
        <CarouselHeadline
          key={section._key}
          headline={section.headline}
          subtext={section.headlineSubText}
          carouselImages={section.carouselImages}
        />
      );
    case OBJECTS.testimonials:
      return (
        <Testimonials
          key={section._key}
          title={section.title}
          subtext={section.subtext}
          testimonials={section.testimonialList}
        />
      );
    case "ctaSection":
      console.log(section);
      return (
        <CTA
          key={section._key}
          backgroundImage={section.ctaImage}
          intent={section.theme}
          align={section.alignment}
          title={section.ctaTitle}
          text={section.ctaText}
        >
          <h1>Hello??</h1>
        </CTA>
      );
  }
}

export default renderComponents;
