import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta.copy";

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_2.png";

function CTAContent() {
  return (
    <>
      <div className={"flex flex-col gap-y-4"}>
        <p className={"font-bold"}>{SPLIT_CTA_CONTENT.tag}</p>
        <h2 className={"font-display text-5xl"}>{SPLIT_CTA_CONTENT.title}</h2>
        <p>{SPLIT_CTA_CONTENT.description}</p>
        <p>{SPLIT_CTA_CONTENT.description2}</p>
        <div className={"flex flex-row gap-2"}>
          <RoundedButton color={"primary"} size={"lg"}>
            Shop Jewel
          </RoundedButton>
          <RoundedButton color={"background"} variant={"outline"} size={"lg"}>
            Join the insider list
          </RoundedButton>
        </div>
      </div>
    </>
  );
}

function CTAImage() {
  return (
    <div>
      <Image
        src={PLACEHOLDER_IMAGE_PATH}
        width={720}
        height={751}
        alt={"Placeholder image 2"}
      />
    </div>
  );
}

function SplitCTA() {
  return (
    <Container className="flex w-full flex-row items-center">
      <div className="w-1/2 items-center gap-x-4">
        <CTAContent />
      </div>
      <div>
        <CTAImage />
      </div>
    </Container>
  );
}

export default SplitCTA;
