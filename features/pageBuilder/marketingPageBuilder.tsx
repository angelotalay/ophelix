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
import Headline from "@/features/marketing/components/headline/Headline";
import {MarketingPageSectionType} from "@/features/marketing/types";

function renderComponents(section: MarketingPageSectionType) {
  switch (section._type) {
    case OBJECTS.hero:
      return (
        <Hero
          title={section.title}
          text={section.text}
          muxVideo={section.muxVideo && section.muxVideo.playbackId}
          image={section.heroImage}
          navigationButton1={section.heroNavigation1}
          navigationButton2={section.heroNavigation2}
          key={section._key}
          align={section.alignment}
        />
      );
    case OBJECTS.splitCta:
      return (
        <SplitCTA
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.ctaText}
          ctaImage={section.ctaImage}
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
          headlineImage={section.headlineImage}
          userStoryBlocks={section.storyBlocks}
        />
      );
    case OBJECTS.carousel:
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
    case OBJECTS.cta:
      return (
        <CTA
          key={section._key}
          backgroundImage={section.ctaImage}
          intent={section.intent}
          align={section.alignment}
          textAlign={section.textAlignment}
          title={section.ctaTitle}
          text={section.ctaText}
          navigation1={section.ctaNavigation1}
          navigation2={section.ctaNavigation2}
        />
      );
    case OBJECTS.headline:
      return(
        <Headline key={section._key} intent={section.intent} eyebrow={section.eyebrow} title={section.title} text={section.text}/>
      )
  }
}

export default renderComponents;
