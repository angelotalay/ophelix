import React from "react";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";

import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Container from "@/components/layout/Container";
import CTA_CONTENT from "@/features/marketing/components/cta/cta.copy";

const PLACEHOLDER_IMAGE_PATH = "/images/placeholder_image_4.jpg";

const ctaVariants = cva(" relative z-10 h-full text-background", {
  variants: {
    align: {
      center: "justify-center items-center",
      left: "justify-center items-start",
    },
    "text-align": {
      center: "text-center",
      left: "text-start",
    },
  },
});

type CTAProps = {
  children?: React.ReactNode;
  align: "left" | "center" | "right";
} & VariantProps<typeof ctaVariants>;

function CTA({ children, align }: CTAProps) {
  return (
    <Section className="relative overflow-hidden md:h-100">
      <Container className="h-full">
        <div className="absolute inset-0 z-0 brightness-50">
          <Image
            src={PLACEHOLDER_IMAGE_PATH}
            fill
            className="object-cover"
            alt="Placeholder image"
          />
        </div>
        <Stack className={ctaVariants({ align })} gap="sm">
          <Stack>
            <h2 className="font-display text-5xl">{CTA_CONTENT.title}</h2>
            <p className="text-2xl">{CTA_CONTENT.text}</p>
          </Stack>
          {children}
        </Stack>
      </Container>
    </Section>
  );
}

export default CTA;
