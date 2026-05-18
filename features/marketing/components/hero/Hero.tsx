import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";

import Container from "@/components/layout/Container";
import NavigationButtons from "@/features/marketing/components/buttons/NavigationButtons";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { urlFor } from "@/sanity/lib/image";
import type { Get, FilterByType } from "@sanity/codegen";
import { MarketingPageSectionType } from "@/features/marketing/types";

const heroVariants = cva("h-full", {
  variants: {
    align: {
      center: "justify-center items-center",
      left: "justify-end items-start",
      right: "justify-end items-end",
    },}
});

type HeroSectionType = FilterByType<MarketingPageSectionType, "heroSection">;

interface HeroSectionProps {
  title: HeroSectionType["title"];
  text: HeroSectionType["text"];
  muxVideo: Get<HeroSectionType, "muxVideo", "playbackId">
  image: HeroSectionType["heroImage"];
  navigationButton1: HeroSectionType["heroNavigation1"]
  navigationButton2: HeroSectionType["heroNavigation2"];
  align: HeroSectionType["alignment"];
}



type HeroHeaderProps = Pick<
  HeroSectionProps,
  "title" | "text" | "navigationButton1" | "navigationButton2"
> & VariantProps<typeof heroVariants>;

function HeroHeader({
  title,
  text,
  navigationButton1,
  navigationButton2,
  align = "center"
}: HeroHeaderProps) {
  const hasButtons = navigationButton1 || navigationButton2;

  return (
    <Container className="h-full">
      <Stack gap="md" className={heroVariants({align: align})}>
        <Stack
          className="font-display text-6xl whitespace-pre-wrap text-background"
          gap="sm"
        >
          <h1>{title}</h1>
        </Stack>

        <Stack gap="sm" className="text-2xl text-background">
          <p className="whitespace-pre-wrap text-center">{text}</p>
        </Stack>

        {hasButtons && (
          <Stack orientation="horizontal" gap="sm">
            <NavigationButtons
              navigationButton1={navigationButton1}
              navigationButton2={navigationButton2}
              size="default"
              intent1="primary"
              intent2="background"
            />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

function Hero({
  title,
  text,
  muxVideo,
  image,
  navigationButton1,
  navigationButton2,
  align
}: HeroSectionProps) {
  return (
    <Section
      className="relative h-full w-full overflow-hidden"
      as="section"
      paddingY="md"
    >
      <div className="absolute inset-0 z-0 h-full">
        {muxVideo ? (
          <MuxPlayer
            className="heroMuxPlayer h-full w-full"
            playbackId={muxVideo}
            loop
            muted
            autoPlay
            playsInline
          />
        ) : image ? (
          <Image
            src={urlFor(image.image).url()}
            alt=""
            fill
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="relative z-10 flex h-full items-end">
        <HeroHeader
          title={title}
          text={text}
          navigationButton1={navigationButton1}
          navigationButton2={navigationButton2}
          align={align}
        />
      </div>
    </Section>
  );
}

export default Hero;
