import React from "react";
import Image from "next/image";
import type {FilterByType, Get} from "@sanity/codegen";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { urlFor } from "@/sanity/lib/image";
import { MarketingPageSectionType } from "@/features/marketing/types";
import SPLIT_CTA_CONTENT from "@/features/marketing/components/cta/splitCta.copy";
import { cva, VariantProps } from "class-variance-authority";


type SplitCtaSectionType = FilterByType<MarketingPageSectionType, "splitCtaSection">;

type SplitCtaSectionProps = {
  eyebrow : SplitCtaSectionType["eyebrow"];
  title: SplitCtaSectionType["title"];
  text: SplitCtaSectionType["ctaText"];
  ctaImage: Get<SplitCtaSectionType, "ctaImage">;
  intent: SplitCtaSectionType["intent"];
} & VariantProps<typeof splitCTAVariants>;


function CTAContent({
  eyebrow = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.tag,
  title = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.title,
  text = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.description,
}: Omit<SplitCtaSectionProps, "ctaImage" | "intent">) {
  return (
    <Stack className={"text-foreground"} gap={"md"}>
      {eyebrow && <p className="font-bold text-foreground">{eyebrow}</p> }
      <h2 className="text font-display text-5xl">{title}</h2>
      <p className="whitespace-pre-wrap">{text}</p>
      <Stack orientation="horizontal" gap="sm">
        <RoundedButton size="lg" intent={"primary"}>
          Shop Jewel
        </RoundedButton>
        <RoundedButton variant="outline" size={"lg"} intent={"background"}>
          Join the insider list
        </RoundedButton>
      </Stack>
    </Stack>
  );
}

const splitCTAVariants = cva("", {
  variants: {
    intent: {
      primary: "bg-primary",
      muted: "bg-muted",
      neutral: "bg-neutral",
      white: "bg-white",
      dark: "bg-dark",
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
});

function SplitCTA({ title, eyebrow, text, ctaImage, intent }: SplitCtaSectionProps) {
  return (
    <Section className={splitCTAVariants({ intent })}>
      <Container>
        <Stack
          orientation="horizontal"
          data-intent={intent}
          gap="md"
          className="items-center"
        >
          <div className="w-1/2">
            <CTAContent title={title} eyebrow={eyebrow} text={text} />
          </div>
          <div className={"w-1/2"}>
            {ctaImage && (
              <Image
                src={urlFor(ctaImage.image).url()}
                width={720}
                height={751}
                alt="Placeholder image 2"
              />
            )}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

export default SplitCTA;
