import React from "react";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import type { Get } from "@sanity/codegen";

import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Container from "@/components/layout/Container";
import CTA_CONTENT from "@/features/marketing/components/cta/cta.copy";
import { CtaSection, Cta } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import NavigationButtons from "@/features/marketing/components/buttons/NavigationButtons";
const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_4.jpg";

type CTAAlign = NonNullable<VariantProps<typeof ctaVariants>["align"]>;

const ctaVariants = cva(" relative z-10 h-full text-background", {
  variants: {
    align: {
      center: "justify-center items-center",
      left: "justify-center items-start",
      right: "justify-center items-end",
    },
    "text-align": {
      center: "text-center",
      left: "text-start",
      right: "text-end",
    },
  },
});

type CTAProps = {
  backgroundImage: Cta["ctaImage"];
  intent: CtaSection["theme"];
  align: CTAAlign;
  title: Cta["title"];
  text: Cta["text"] | null;
  navigation1: Get<Cta, "ctaNavigation1">;
  navigation2: Get<Cta, "ctaNavigation2">;
  supportingNote?: Cta["supportingNote"];
} & VariantProps<typeof ctaVariants>;

function CTA({
  title = CTA_CONTENT.title,
  text = CTA_CONTENT.text,
  align,
  intent = "background",
  backgroundImage,
  navigation1,
  navigation2,
  supportingNote,
}: CTAProps) {
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
        <Stack className={ctaVariants({ align })} gap="md">
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
