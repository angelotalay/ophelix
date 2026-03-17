import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { BaseHeadlineCTAProps } from "@/features/marketing/types";

import SPLIT_CTA_CONTENT from "@/features/marketing/components/splitCta/splitCta.copy";
import { cva, VariantProps } from "class-variance-authority";

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_2.png";

type CTAContentProps = Omit<SplitCTAProps, "src" | "intent">;

interface CTAImageProps {
  src?: string;
}

function CTAContent({
  tag = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.tag,
  title = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.title,
  descriptions = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.description,
}: CTAContentProps) {
  return (
    <Stack className={"text-foreground"} gap={"md"}>
      <p className="font-bold text-foreground">{tag}</p>
      <h2 className="text font-display text-5xl">{title}</h2>
      {descriptions.map((description, idx) => (
        <p key={idx}> {description}</p>
      ))}
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

function CTAImage({ src = PLACEHOLDER_IMAGE_PATH }: CTAImageProps) {
  return (
    <div>
      <Image src={src} width={720} height={751} alt="Placeholder image 2" />
    </div>
  );
}

const splitCTAVariants = cva("", {
  variants: {
    intent: {
      primary: "bg-primary",
      background: "bg-background",
      "extra-dark": "bg-extra-dark",
    },
  },
  defaultVariants: {
    intent: "background",
  },
});

type SplitCTAProps = Omit<BaseHeadlineCTAProps, "text"> & {
  tag: string;
  title: string;
  descriptions?: string[];
  src?: string;
} & VariantProps<typeof splitCTAVariants>;

function SplitCTA({ title, tag, descriptions, src, intent }: SplitCTAProps) {
  return (
    <Section className={splitCTAVariants({ intent })}>
      <Container data-intent={intent}>
        <Stack
          orientation="horizontal"
          data-intent={intent}
          gap="md"
          className="items-center"
        >
          <div className="w-1/2">
            <CTAContent title={title} tag={tag} descriptions={descriptions} />
          </div>
          <div className={"w-1/2"}>
            <CTAImage src={src} />
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

export default SplitCTA;
