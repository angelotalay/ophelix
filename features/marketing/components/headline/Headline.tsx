import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import type {  FilterByType } from "@sanity/codegen";

import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import Section from "@/components/layout/Section";
import {MarketingPageSectionType as PageSection} from "@/features/marketing/types";


// This will be extracted out from a shared file
const headlineBlockVariants = cva("", {
  variants: {
    intent: {
      primary: "text-background bg-primary",
      dark: "text-dark-foreground bg-dark",
      neutral: "",
      muted: "",
      white: "white",
    },
  },
});

type HeadlineVariantProps = VariantProps<typeof headlineBlockVariants>
type HeadlineSection = FilterByType<PageSection, "headlineSection">;

interface HeadlineSectionProps extends Omit<HeadlineSection, "_type" | "_key"> {
  intent: NonNullable<HeadlineVariantProps["intent"]>
}

function Headline({ eyebrow, title, text, intent } : HeadlineSectionProps) {
  return (
    <Section className={headlineBlockVariants({ intent })} data-intent={intent}>
      <Container>
        <Stack className={"items-center justify-center"} data-intent>
          {eyebrow && (
            <p className="font-semibold text-foreground">{eyebrow}</p>
          )}
          <h2 className="font-display text-5xl">{title}</h2>
          <p className="max-w-xl text-center text-xl text-foreground">{text}</p>
        </Stack>
      </Container>
    </Section>
  );
}

export default Headline;
