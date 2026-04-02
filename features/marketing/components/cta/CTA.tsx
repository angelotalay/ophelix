import React from "react";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";

import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Container from "@/components/layout/Container";
import CTA_CONTENT from "@/features/marketing/components/cta/cta.copy";
import { CtaSection, Cta } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
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
  children?: React.ReactNode;
  backgroundImage: Cta["ctaImage"];
  intent: CtaSection["theme"];
  align: CTAAlign;
  title: Cta["title"];
  text: Cta["text"] | null;
} & VariantProps<typeof ctaVariants>;

function CTA({
  children,
  title = CTA_CONTENT.title,
  text = CTA_CONTENT.text,
  align,
  intent = "background",
  backgroundImage,
}: CTAProps) {
  return (
    <Section className="relative overflow-hidden md:h-100" data-intent={intent}>
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
        <Stack className={ctaVariants({ align })} gap="sm">
          <Stack>
            <h2 className="font-display text-5xl">{title}</h2>
            <p className="text-2xl">{text}</p>
          </Stack>
          {children}
        </Stack>
      </Container>
    </Section>
  );
}

export default CTA;
