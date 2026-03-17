import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import { BaseHeadlineCTAProps } from "@/features/marketing/types";
import Section from "@/components/layout/Section";

const headlineBlockVariants = cva("", {
  variants: {
    intent: {
      primary: "bg-background",
      "extra-dark": "bg-extra-dark",
      background: "bg-background",
    },
  },
});

const headlineBlockTitleVariants = cva("text-5xl font-display", {
  variants: {
    intent: {
      primary: "text-background",
      "extra-dark": "text-extra-dark-foreground",
      background: "text-foreground",
    },
  },
});

type HeadlineBlockProps = BaseHeadlineCTAProps &
  VariantProps<typeof headlineBlockVariants>;

function HeadlineBlock({ tag, title, text, intent }: HeadlineBlockProps) {
  return (
    <Section className={headlineBlockVariants({ intent })} data-intent={intent}>
      <Container>
        <Stack className={"items-center justify-center"} data-intent>
          <p className="font-semibold text-foreground">{tag}</p>
          <h2 className={headlineBlockTitleVariants({ intent })}>{title}</h2>
          <p className="max-w-xl text-center text-xl text-foreground">{text}</p>
        </Stack>
      </Container>
    </Section>
  );
}

export default HeadlineBlock;
