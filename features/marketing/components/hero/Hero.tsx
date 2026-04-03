import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import NavigationButtons from "@/features/marketing/components/buttons/NavigationButtons";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { Hero as HeroType, MuxPlaybackId, ImageAsset } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import type { Get } from "@sanity/codegen";

interface HeroProps {
  title: HeroType["title"];
  text: HeroType["heroText"];
  muxVideo: MuxPlaybackId["id"] | null;
  image: Get<HeroType, "heroImage">;
  navigationButton1: Get<HeroType, "heroNavigation1">;
  navigationButton2: Get<HeroType, "heroNavigation2">;
}

type HeroHeaderProps = Pick<
  HeroProps,
  "title" | "text" | "navigationButton1" | "navigationButton2"
>;

function HeroHeader({
  title,
  text,
  navigationButton1,
  navigationButton2,
}: HeroHeaderProps) {
  const hasButtons = navigationButton1 || navigationButton2;

  return (
    <Container>
      <Stack gap="md">
        <Stack
          className="font-display text-6xl whitespace-pre-wrap text-background"
          gap="sm"
        >
          <h1>{title}</h1>
        </Stack>

        <Stack gap="sm" className="text-2xl text-background">
          <p className="whitespace-pre-wrap">{text}</p>
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
}: HeroProps) {
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
        />
      </div>
    </Section>
  );
}

export default Hero;
