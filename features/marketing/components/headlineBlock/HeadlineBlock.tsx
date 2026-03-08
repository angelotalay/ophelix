import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import Container from "@/components/layout/Container";
import { BaseHeadlineCTAProps } from "@/features/marketing/types";

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
    <div className={headlineBlockVariants({ intent })} data-intent={intent}>
      <Container
        className={"flex flex-col items-center justify-center gap-6"}
        data-intent
      >
        <p className="font-semibold text-foreground">{tag}</p>

        <h2 className={headlineBlockTitleVariants({ intent })}>{title}</h2>
        <p className="max-w-xl text-center text-xl text-foreground">{text}</p>
      </Container>
    </div>
  );
}

export default HeadlineBlock;
