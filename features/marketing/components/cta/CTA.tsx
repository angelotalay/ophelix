import React from "react";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import type { Get, FilterByType } from "@sanity/codegen";

import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Container from "@/components/layout/Container";
import CTA_CONTENT from "@/features/marketing/components/cta/cta.copy";
import { urlFor } from "@/sanity/lib/image";
import NavigationButtons from "@/features/marketing/components/buttons/NavigationButtons";
const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_4.jpg";
import { MarketingPageSectionType } from "@/features/marketing/types";

const ctaVariants = cva(" relative z-10 h-full text-background", {
  variants: {
    align: {
      center: "justify-center items-center",
      left: "justify-center items-start",
      right: "justify-center items-end",
    },
    textAlign: {
      center: "text-center",
      left: "text-start",
      right: "text-end",
    },
  },
});

type CtaSectionType = FilterByType<MarketingPageSectionType, "ctaSection">;

type CTAProps = {
  backgroundImage: CtaSectionType["ctaImage"];
  intent: CtaSectionType["intent"];
  title: CtaSectionType["ctaTitle"];
  text: CtaSectionType["ctaText"];
  navigation1: Get<CtaSectionType, "ctaNavigation1">;
  navigation2: Get<CtaSectionType, "ctaNavigation2">;
  supportingNote?: CtaSectionType["supportingNote"];

} & VariantProps<typeof ctaVariants>;

function CTA({
  title = CTA_CONTENT.title,
  text = CTA_CONTENT.text,
  align,
  intent = "white",
  backgroundImage,
  navigation1,
  navigation2,
  supportingNote,
  textAlign
}: CTAProps) {
  console.log(align);
  return (
    <Section className="relative overflow-hidden md:h-175" data-intent={intent}>
      <Container className="h-full">
        {backgroundImage && (
          <div className="absolute inset-0 z-0 brightness-50">
            <Image
              src={
                urlFor(backgroundImage.image).url() || PLACEHOLDER_IMAGE_PATH
              }
              fill
              className="object-cover"
              alt="Placeholder image"
            />
          </div>
        )}
        <Stack className={ctaVariants({ align, textAlign })} gap="md">
          <Stack>
            <h2 className="font-display text-5xl">{title}</h2>
            <p className="text-2xl">{text}</p>
          </Stack>
          <Stack orientation={"horizontal"}>
            <NavigationButtons
              navigationButton1={navigation1}
              navigationButton2={navigation2}
              size={"default"}
              intent1={"primary"}
              intent2={"background"}
            />
          </Stack>
          {supportingNote && <p>{supportingNote}</p>}
        </Stack>
      </Container>
    </Section>
  );
}

export default CTA;
