import React from "react";
import Image from "next/image";

import Container from "@/components/layout/Container";
import RoundedButton from "@/components/buttons/RoundedButton";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import { BaseHeadlineCTAProps } from "@/features/marketing/types";
import { ImageAsset, SplitSection } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

import SPLIT_CTA_CONTENT from "@/features/marketing/components/cta/splitCta.copy";
import { cva, VariantProps } from "class-variance-authority";

type CTAContentProps = Omit<SplitCTAProps, "image" | "intent">;

interface CTAImageProps {
  image: ImageAsset | null;
}

function CTAContent({
  tag = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.tag,
  title = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.title,
  text = SPLIT_CTA_CONTENT.SPLIT_CTA_CONTENT.description,
}: CTAContentProps) {
  return (
    <Stack className={"text-foreground"} gap={"md"}>
      <p className="font-bold text-foreground">{tag}</p>
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

function CTAImage({ image }: CTAImageProps) {
  if (image?.image)
    return (
      <div>
        <Image
          src={urlFor(image.image).url()}
          width={720}
          height={751}
          alt="Placeholder image 2"
        />
      </div>
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

type SplitCTAProps = Omit<BaseHeadlineCTAProps, "src"> & {
  tag: string | null;
  title: string | null;
  image: ImageAsset | null;
  intent: NonNullable<SplitSection["intent"]>;
} & VariantProps<typeof splitCTAVariants>;

function SplitCTA({ title, tag, text, image, intent }: SplitCTAProps) {
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
            <CTAContent title={title} tag={tag} text={text} />
          </div>
          <div className={"w-1/2"}>
            <CTAImage image={image} />
          </div>
        </Stack>
      </Container>
    </Section>
  );
}

export default SplitCTA;
