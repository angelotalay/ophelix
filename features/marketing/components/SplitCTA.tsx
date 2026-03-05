import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta.copy";

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_2.png";

interface CTAContentProps {
  tag?: string;
  title?: string;
  descriptions?: string[];
  intent?: SplitCTAProps["intent"];
}

interface CTAImageProps {
  src?: string;
}

function CTAContent({
  tag = SPLIT_CTA_CONTENT.tag,
  title = SPLIT_CTA_CONTENT.title,
  descriptions = SPLIT_CTA_CONTENT.description,
}: CTAContentProps) {
  return (
    <>
      <div className={"flex flex-col gap-y-4 text-foreground"}>
        <p className="font-bold text-foreground">{tag}</p>
        <h2 className="text font-display text-5xl">{title}</h2>
        {descriptions.map((description, idx) => (
          <p key={idx}> {description}</p>
        ))}
        <div className="flex flex-row gap-2">
          <RoundedButton size="lg" intent={"primary"}>
            Shop Jewel
          </RoundedButton>
          <RoundedButton variant="outline" size={"lg"} intent={"background"}>
            Join the insider list
          </RoundedButton>
        </div>
      </div>
    </>
  );
}

function CTAImage({ src = PLACEHOLDER_IMAGE_PATH }: CTAImageProps) {
  return (
    <div>
      <Image src={src} width={720} height={751} alt="Placeholder image 2" />
    </div>
  );
}

function SplitCTA({ intent = "extra-dark" }) {
  return (
    <Container
      className={"flex w-full flex-row items-center gap-y-2"}
      data-intent={intent}
    >
      <div className="w-1/2">
        <CTAContent />
      </div>
      <div className={"w-1/2"}>
        <CTAImage />
      </div>
    </Container>
  );
}

export default SplitCTA;
