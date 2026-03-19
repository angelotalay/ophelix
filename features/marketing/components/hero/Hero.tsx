import React from "react";
import { MuxBackgroundVideo } from "@mux/mux-background-video/react";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Image from "next/image";

function HeaderButtons() {
  return (
    <>
      <RoundedButton size={"lg"} intent={"primary"}>
        Shop Jewel
      </RoundedButton>
      <RoundedButton size={"lg"} intent={"background"} variant={"default"}>
        Join the insider list
      </RoundedButton>
    </>
  );
}

function HeroHeader() {
  return (
    <Container>
      <Stack gap="md">
        <Stack className={"font-display text-6xl text-background"} gap="sm">
          <h1> Wear It Everyday.</h1>
          <h1>We&#39;ll Take Care Of It.</h1>
        </Stack>
        <Stack gap="sm" className={"text-2xl text-background"}>
          <p>Warranty repair dispatched in 30 days and £50 back.</p>
          <p>First run limited to 100 watches.</p>
        </Stack>
        <Stack orientation="horizontal" gap="sm">
          <HeaderButtons />
        </Stack>
      </Stack>
    </Container>
  );
}

function Hero() {
  return (
    <Section
      className={"relative h-dvh w-full overflow-hidden"}
      as="section"
      paddingY="md"
    >
      <div className="absolute inset-0 z-0">
        <MuxBackgroundVideo
          className="h-full w-full object-cover"
          src={
            "https://stream.mux.com/02FPOtBxVE7ud402hmeGe6YaUJC5bVMe4QCsQc4vJWkNU.m3u8"
          }
        >
          <Image
            className="h-full w-full object-cover"
            src="https://image.mux.com/02FPOtBxVE7ud402hmeGe6YaUJC5bVMe4QCsQc4vJWkNU/thumbnail.webp?time=0"
            alt="Hero Background"
          />
        </MuxBackgroundVideo>
      </div>

      {/* 2. Content Overlay using Flexbox for alignment */}
      <div className={"relative z-10 flex h-full items-end"}>
        <HeroHeader />
      </div>
    </Section>
  );
}

export default Hero;
