import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import CTA_CONTENT from "@/features/marketing/components/cta/cta.copy";

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_4.jpg";

function CTA() {
  return (
    <div className="relative w-full overflow-hidden md:h-150">
      <div className="absolute inset-0 z-0">
        <Image
          src={PLACEHOLDER_IMAGE_PATH}
          fill
          className="object-cover"
          alt="Placeholder image"
        />
      </div>
      <Container className="relative z-10 flex h-full flex-col justify-center gap-4 align-middle text-background">
        <div>
          <h2 className="font-display text-5xl">{CTA_CONTENT.title}</h2>
          <p className="text-2xl">{CTA_CONTENT.text}</p>
        </div>
        <div className="flex flex-row gap-2">
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
        </div>
      </Container>
    </div>
  );
}

export default CTA;
